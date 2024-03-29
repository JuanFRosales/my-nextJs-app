import { requireAuth } from '../lib/authActions';

const Page = () => {
    requireAuth();
    return (
      <main>
        <h1 className="text-4xl font-bold">
          Use one of these: Profile or Upload
        </h1>
      </main>
    );
  };
  
  export default Page;