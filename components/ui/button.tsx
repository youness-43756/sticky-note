import * as React from "react"
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: " bg-slate-50 text-card-foreground border-t-4 border-slate-200 active:border-t-0 hover:bg-slate-100",
        primary: "bg-sky-400 text-primary-foreground border-t-4 border-sky-500 active:border-t-0 hover:bg-sky-400/80",
        submit: "bg-gray-600 text-primary-foreground border-t-4 border-gray-700 active:border-t-0 hover:bg-gray-600/80",
        link: "underline text-muted-foreground hover:text-black",
      },
      size: {
        default: "h-10 px-4 py-2",
        full: "h-10 w-full px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
