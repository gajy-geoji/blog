import type { CollectionEntry } from 'astro:content';
import { getCollection } from 'astro:content';

export type InstatoonScenario = CollectionEntry<'instatoon'>;

export async function getPublishedInstatoons(): Promise<InstatoonScenario[]> {
  const scenarios = await getCollection('instatoon', ({ data }) =>
    import.meta.env.PROD ? !data.draft : true,
  );

  return scenarios.sort(
    (a, b) => b.data.publishedAt.valueOf() - a.data.publishedAt.valueOf(),
  );
}

export function getInstatoonSlug(scenario: InstatoonScenario): string {
  return scenario.id.replace(/\/index$/, '');
}
