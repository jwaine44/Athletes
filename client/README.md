Creating 4 views:
    - Index Page/View: This will list the athletes in the database (route: '/')
    - Create Page/View: A form to create an athlete (route: '/create')
    - Detail Page/View: A page to actually see the details an athlete with links to edit/delete (route: '/:id')
    - Edit Page/View: A page to edit an athlete in the database with a delete button as well (route: '/:id/edit')

2 reusable components:
    - Form: The form that we will use on the create page and the edit page
    - Delete Button: Which will make an API call to delete an athlete