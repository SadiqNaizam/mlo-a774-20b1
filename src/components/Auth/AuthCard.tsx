import * as React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import FormInputs from './FormInputs';
import ActionButton from './ActionButton';
import SecondaryActionLink from './SecondaryActionLink';

interface AuthCardProps {
  className?: string;
}

const AuthCard: React.FC<AuthCardProps> = ({ className }) => {

  const handleLogin = React.useCallback(() => {
    // In a real app, this would trigger the authentication logic
    console.log('Login button clicked');
  }, []);

  const handleSignUp = React.useCallback(() => {
    // In a real app, this would navigate to the sign-up page
    console.log('Sign up link clicked');
  }, []);

  return (
    <Card className={cn('w-96 bg-card text-card-foreground shadow-lg rounded-lg', className)}>
      <CardHeader>
        <CardTitle className="text-3xl font-bold">Log in</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-6">
        <FormInputs />
        <ActionButton onClick={handleLogin}>Log in</ActionButton>
      </CardContent>
      <CardFooter className="flex justify-center">
        <SecondaryActionLink onClick={handleSignUp}>or, sign up</SecondaryActionLink>
      </CardFooter>
    </Card>
  );
};

export default AuthCard;
