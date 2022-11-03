export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'prooftv/sanity-angular-website'
      }
    },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '636373949942a74361dd64cb',
                  title: 'Sanity Studio',
                  name: 'sanity-angular-website-studio-u18nuf9a',
                  apiId: 'b84f873b-30a5-4b71-88fd-9600debd68bc'
                },
                {
                  buildHookId: '63637395bcd7f5418bcbd1d3',
                  title: 'Website',
                  name: 'sanity-angular-website-web-6nfr728q',
                  apiId: '6996a1c5-fd50-4679-9d9e-5c6a84f83b5d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/prooftv/sanity-angular-website',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-angular-website-web-6nfr728q.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
