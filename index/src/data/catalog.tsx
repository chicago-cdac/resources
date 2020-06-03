export interface CatalogEntry {
  id: string,
  name: string,
  link?: string,
  entry?: Array<CatalogEntry>,
}

export interface Catalog {
  id: string,
  name: string,
  entry: Array<CatalogEntry>,
}

const data: Catalog = {
  id: 'root',
  name: 'Catalog',
  entry: [
    {
      id: '1',
      name: 'Computer Science',
      entry: [
        {
          id: '1.1',
          name: 'Open Source Projects',
          link: 'docs/computerscience'
        }
     ]
    }
  ],
};

export default data;
