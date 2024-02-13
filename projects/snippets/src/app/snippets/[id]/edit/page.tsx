import { parse } from 'path';
import { notFound } from 'next/navigation';
import { db } from '@/db';

interface SnippetEditPageProps {
  params: {
    id: string;
  };
}

export default async function SnippetEditPage(props: SnippetEditPageProps) {
  const id = parseInt(props.params.id);

  const snippet = await db.snippet.findFirst({
    where: {
      id,
    },
  });

  if (!snippet) {
    return notFound();
  }

  return <div>Editing snippet with title {snippet.title}</div>;
}
