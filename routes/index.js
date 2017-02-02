
/*
 * GET home page.
 */

exports.view = function(req, res){
  res.render('index',{
  	'projects':[
  	{'name': 'waiting in Line',
  	'image': 'lorempixel.people.1.jpeg',
  	'id': 'project1'
  	},
  	{'name': 'Needfinding',
  	'image': 'lorempixel.city.1.jpeg',
  	'id': 'project2'
  	},
  	{'name': 'Prototype',
  	'image': 'lorempixel.technics.1.jpeg',
  	'id': 'project3'
  	},
  	{'name': 'Heuristic Evaluation',
  	'image': 'lorempixel.abstract.1.jpeg',
  	'id': 'project4'
  	},
  	{'name': 'Visualization',
  	'image': 'lorempixel.people.2.jpeg',
  	'id': 'project5'
  	},
  	{'name': 'Social Design',
  	'image': 'lorempixel.technics.2.jpeg',
  	'id': 'project6'
  	},
  	]
  });
};