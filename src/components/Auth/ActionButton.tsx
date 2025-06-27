import * as React from 'react';
import { Button, type ButtonProps } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ActionButtonProps extends ButtonProps {
  children: React.ReactNode;
}

const ActionButton: React.FC<ActionButtonProps> = ({ className, children, ...props }) => {
  return (
    <Button
      className={cn('w-full', className)}
      size="lg"
      {...props}
    >
      {children}
    </Button>
  );
};

export default ActionButton;
