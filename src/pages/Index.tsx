import * as React from 'react';
import AuthCard from '@/components/Auth/AuthCard';

/**
 * The main login page for the application.
 * It uses a full-screen, centered layout to display the authentication card.
 */
const IndexPage: React.FC = () => {
  return (
    <main className="flex min-h-screen w-full items-center justify-center bg-background p-4">
      <AuthCard />
    </main>
  );
};

export default IndexPage;
