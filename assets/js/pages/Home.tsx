import { Button } from '@/components/ui/button';
import React, { useCallback } from 'react';
import { Link } from '@inertiajs/react'

interface HomeProps {
  title?: string;
}

const Home: React.FC<HomeProps> = ({ title }) => {
  const handleVisitUrl = useCallback((url: string) => {
    window.open(url, '_blank');
  }, []);

  return (
    <section className="grid place-items-center h-dvh">
      <div className="px-4 max-w-3xl sm:px-6 lg:px-8">
        <h1>{title}</h1>
        <ul>
          <li>
            Get started by editing the <code>pages/Home.tsx</code> file
          </li>
          <li>Save and see your changes instantly</li>
        </ul>

        <div className="flex space-x-4">
          <Button
            className="cursor-pointer"
            onClick={() => handleVisitUrl('https://djangoproject.com')}
          >
            Read documentation
          </Button>
          <Button
            className="cursor-pointer"
            onClick={() => handleVisitUrl('https://ui.shadcn.com')}
          >
            View components
          </Button>
          <Link href="/todos" as={Button} className="cursor-pointer">
            View todos
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
