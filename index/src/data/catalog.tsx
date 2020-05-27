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
          id: '1-1',
          name: 'Open Source Projects',
          link: 'docs/computerscience'
        },
        {
          id: '1-2',
          name: 'Books and Recommended Reading',
          link: 'docs/readings'
        }
      ]
    },
    {
      id: '2',
      name: 'COVID-19',
      entry: [
        {
          id: '2-1',
          name: 'Papers, Code and Datasets',
          link: 'docs/covid-19'
        }
      ]
    }
  ],
};

export default data;
