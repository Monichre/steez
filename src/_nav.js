export default {
  top: [
    {
      name: 'Home',
      url: '/home',
      icon: 'Home'
    },
   
    {
      name: 'Styleguide',
      icon: 'Cloud',
      children: [


      {
          name: 'Markdown Editor',
          url: '/apps/editor'
        },
      
        {
          name: 'New',
          url: '/apps/cms'
        }
         
      ]
    },
    {
      divider: true
    }
  ],
  bottom: [

  ]
}
