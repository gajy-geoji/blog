import type { CollectionEntry } from 'astro:content';
import { getCollection } from 'astro:content';

export type DiaryEntry = CollectionEntry<'diary'>;

export async function getPublishedDiaries(): Promise<DiaryEntry[]> {
  const diaries = await getCollection('diary', ({ data }) =>
    import.meta.env.PROD ? !data.draft : true,
  );

  return diaries.sort(
    (a, b) => b.data.publishedAt.valueOf() - a.data.publishedAt.valueOf(),
  );
}
