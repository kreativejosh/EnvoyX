<<<<<<< HEAD
import * as React from "react"

import { cn } from "@/lib/utils"
=======
import * as React from "react";

import { cn } from "@/lib/utils";
>>>>>>> e5b6f64b7ea3283aa042bca899836cd8c0c547d4

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
<<<<<<< HEAD
          className
=======
          className,
>>>>>>> e5b6f64b7ea3283aa042bca899836cd8c0c547d4
        )}
        ref={ref}
        {...props}
      />
<<<<<<< HEAD
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }
=======
    );
  },
);
Textarea.displayName = "Textarea";

export { Textarea };
>>>>>>> e5b6f64b7ea3283aa042bca899836cd8c0c547d4
