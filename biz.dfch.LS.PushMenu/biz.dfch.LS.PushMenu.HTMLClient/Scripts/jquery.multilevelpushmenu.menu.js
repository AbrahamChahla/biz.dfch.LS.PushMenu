
// JS Aray instead HTML Markup

var arrMenu = [
	{
	    title: 'Multi-Push Sample',
	    icon: 'fa fa-reorder',
	    items: [
            {
                name: 'Home',
                icon: 'fa fa-bullhorn',
                link: '#',
                page: 'navigateHome'
            },
			{
			    name: 'Test',
			    icon: 'fa fa-html5',
			    link: '#',
			    items: [
					{
					    title: 'Section One',
					    icon: 'fa fa-html5',
					    items: [
							{
							    name: 'Users',
							    icon: 'fa fa-code-fork',
							    link: '#',
							    page: 'showBrowseUsers'
							}
					    ]
					}
			    ]
			},
			{
			    name: 'Tasks',
			    icon: 'fa fa-bullhorn',
			    link: '#',
			    page: 'showBrowseTasks'
			}
	    ]
	}
];