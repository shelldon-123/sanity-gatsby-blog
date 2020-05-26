export default {
  widgets: [
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
                  buildHookId: '5ecd049545228a53b1799213',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-txdp9gk5',
                  apiId: 'f89936d0-31c7-4604-98b0-2454c910d452'
                },
                {
                  buildHookId: '5ecd0495c94566fd215a1fa4',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-nkcijirn',
                  apiId: 'dcd1ac67-f76e-4aa3-9e95-06c11c8aadd6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/shelldon-123/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-nkcijirn.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
