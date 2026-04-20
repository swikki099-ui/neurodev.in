"use client"

import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-wobbly border-[3px] border-[#2d2d2d] bg-white text-[#2d2d2d] font-sans text-lg shadow-[4px_4px_0px_0px_#2d2d2d] transition-all outline-none select-none hover:bg-[#ff4d4d] hover:text-white hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#2d2d2d] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none focus-visible:ring-2 focus-visible:ring-[#2d5da1]/20 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-5",
  {
    variants: {
      variant: {
        default: "",
        secondary: "bg-[#e5e0d8] hover:bg-[#2d5da1]",
        outline: "bg-transparent hover:bg-[#e5e0d8] hover:text-[#2d2d2d]",
        ghost: "border-transparent shadow-none hover:bg-[#e5e0d8] hover:text-[#2d2d2d] hover:translate-x-0 hover:translate-y-0 hover:shadow-none",
        link: "border-transparent shadow-none underline underline-offset-4 hover:text-[#ff4d4d] hover:bg-transparent hover:translate-x-0 hover:translate-y-0 hover:shadow-none",
      },
      size: {
        default: "h-12 px-6 py-2 gap-2",
        sm: "h-10 px-4 py-1 text-base gap-1.5",
        lg: "h-14 px-8 py-3 text-xl gap-2.5",
        icon: "size-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
