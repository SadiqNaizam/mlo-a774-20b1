import * as React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const FormInputs: React.FC = () => {
  return (
    <div className="space-y-4">
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="username" className="sr-only">Username</Label>
        <Input
          type="text"
          id="username"
          placeholder="Username"
          className="bg-card"
        />
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="password" className="sr-only">Password</Label>
        <Input
          type="password"
          id="password"
          placeholder="Password"
          className="bg-card"
        />
      </div>
    </div>
  );
};

export default FormInputs;
