import * as React from 'react';
import { Button, type ButtonProps } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface SecondaryActionLinkProps extends ButtonProps {
  children: React.ReactNode;
}

const SecondaryActionLink: React.FC<SecondaryActionLinkProps> = ({ className, children, ...props }) => {
  return (
    <Button
      variant="link"
      className={cn('font-normal text-muted-foreground hover:text-primary', className)}
      {...props}
    >
      {children}
    </Button>
  );
};

export default SecondaryActionLink;
