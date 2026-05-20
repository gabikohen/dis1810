"use client";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import React, { useRef, useState } from "react";

interface NavbarProps {
  children: React.ReactNode;
  className?: string;
}
interface NavBodyProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}
interface NavItemsProps {
  items: { name: string; link: string }[];
  className?: string;
  onItemClick?: () => void;
}
interface MobileNavProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}
interface MobileNavHeaderProps {
  children: React.ReactNode;
  className?: string;
}
interface MobileNavMenuProps {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}
interface NavbarButtonProps {
  href?: string;
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "dark" | "gradient";
}

export const Navbar = ({ children, className }: NavbarProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const [visible, setVisible] = useState<boolean>(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100) setVisible(true);
    else setVisible(false);
  });

  return (
    <motion.div
      ref={ref}
      className={cn("fixed inset-x-0 top-0 z-50 w-full", className)}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child as React.ReactElement<{ visible?: boolean }>, { visible })
          : child
      )}
    </motion.div>
  );
};

export const NavBody = ({ children, className, visible }: NavBodyProps) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1, y: 0 }}
        animate={visible ? { y: 0, opacity: 1 } : { y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className={cn(
          "relative z-[60] mx-auto hidden w-full max-w-7xl flex-row items-center justify-between self-start rounded-full px-4 py-2 lg:flex",
          visible
            ? "bg-navy-900/95 backdrop-blur-md shadow-[0_1px_0_rgba(184,131,42,0.2)]"
            : "bg-transparent",
          className
        )}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export const NavItems = ({ items, className, onItemClick }: NavItemsProps) => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <motion.div
      onMouseLeave={() => setHovered(null)}
      className={cn("relative z-[60] flex flex-row items-center justify-center space-x-2 lg:space-x-10", className)}
    >
      {items.map((item, idx) => (
        <a // <-- AQUÍ FALTABA ABRIR LA ETIQUETA
          key={`nav-${idx}`}
          href={item.link}
          onMouseEnter={() => setHovered(idx)}
          onClick={onItemClick}
          className="relative px-4 py-2 text-sm font-medium text-white/70 hover:text-white transition-colors"
        >
          {hovered === idx && (
            <motion.div
              layoutId="hovered"
              className="absolute inset-0 h-full w-full rounded-full bg-gold-500/10"
            />
          )}
          <span className="relative z-20 font-condensed text-xs font-semibold tracking-[0.15em] uppercase">
            {item.name}
          </span>
        </a>
      ))}
    </motion.div>
  );
};

export const MobileNav = ({ children, className, visible }: MobileNavProps) => {
  return (
    <motion.div
      animate={visible ? { borderRadius: "0px" } : { borderRadius: "0px" }}
      className={cn(
        "relative z-50 mx-auto flex w-full flex-col items-center justify-between px-4 py-2 lg:hidden",
        visible ? "bg-navy-900/95 backdrop-blur-md" : "bg-transparent",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export const MobileNavHeader = ({ children, className }: MobileNavHeaderProps) => {
  return (
    <div className={cn("relative z-[70] flex w-full flex-row items-center justify-between", className)}>
      {children}
    </div>
  );
};

export const MobileNavMenu = ({ children, className, isOpen }: MobileNavMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className={cn(
            "fixed top-0 left-0 right-0 bottom-0 z-[65] flex flex-col bg-navy-950 pt-20 lg:hidden overflow-y-auto",
            className
          )}
        >
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.26, ease: "easeOut" }}
            className="relative z-10 flex w-full flex-col gap-8 px-6 sm:px-8"
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const NavbarButton = ({
  href,
  as: Tag = "a",
  children,
  className,
  variant = "primary",
}: NavbarButtonProps) => {
  const baseStyles =
    "relative z-10 font-condensed text-xs font-bold tracking-[0.12em] uppercase px-5 py-2.5 transition-all duration-200";

  const variantStyles = {
    primary: "bg-gold-500 text-navy-800 hover:bg-gold-400",
    secondary: "border border-white/20 text-white hover:bg-white/10",
    dark: "bg-navy-800 text-white hover:bg-navy-700",
    gradient: "bg-gradient-to-r from-gold-600 to-gold-400 text-navy-800",
  };

  return (
    <Tag href={href} className={cn(baseStyles, variantStyles[variant], className)}>
      {children}
    </Tag>
  );
};