file = { 
	path: "/Users", 
	filename: "alainlavoie", 
	size: 234, 
	owner: "alainlavoie", 
	created: new Date('01/03/2014'), 
	modified: new Date('04/03/2014')
}

db.files.insert(file);
db.files.find();