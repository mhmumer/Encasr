import { headers } from 'next/headers';

export default async function MenPage() {
  const host = (await headers()).get('host');

  if (!host?.startsWith('men.')) {
    return <p>404 - Not Found</p>;
  }

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">Mens Collection</h1>
      {/* Your content here */}
    </div>
  );
}
