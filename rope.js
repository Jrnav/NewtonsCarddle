class rope{
	constructor(body1, body2, pointA, pointB)
	{

	this.pointA = pointA
	this.pointB = pointB

	this.con = Matter.Constraint.create({
		bodyA: body1,
		bodyB: body2,
		pointB: {x: this.pointA, y: this.pointB},
		length: 200,
		stifness: 2
	})
	}
    display(){
		var pointA = this.con.bodyA.position
		var pointB = this.con.bodyB.position

		strokeWeight(2);
		line(pointA.x, pointB.y, pointA.x, pointA.y)
	}

}
