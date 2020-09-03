// VECTOR CLASS DESCRIPTION:
/* 
	The Vector class will be a simple 3D vector
*/

// VECTOR CLASS FIELDS:
// 		x (numerical) : component in x direction
// 		y (numerical) : component in y direction
//		z (numerical) : component in z direction

class Vector
{
	// sets up a vector with xyz components "this.x, this.y. this.z"
	constructor (x=0, y=0, z=0)
	{
		this.x = x;
		this.y = y;
		this.z = z;
	}

	// sets this vectos xyz components to the input values
	set(x, y, z)
	{
		this.x = x;
		this.y = y;
		this.z = z;
	}

	// takes vector "v", and adds it to this vector.
	// if "inplace" is true, this vector updates itself
	// otherwise, a new vector is created and returned, and this vector is left unchanged
	// this is what "inplace" means in all other functions as well
	add(v, inplace=true)
	{
		if(inplace){
		this.x += v.x;
		this.y += v.y;
		this.z += v.z;
		} else{
			var out = new Vector();
			out.x = this.x + v.x;
			out.y = this.y + v.y;
			out.z = this.z + v.z;
			return out;
		}
	}

	// subtracts vector "v" from this vector
	subtract(v, inplace=true)
	{
		if(inplace){
			this.x -= v.x;
			this.y -= v.y;
			this.z -= v.z;
			} else{
				var out = new Vector();
				out.x = this.x - v.x;
				out.y = this.y - v.y;
				out.z = this.z - v.z;
				return out;
			}
	}

	// scales this vector by vector "v"
	// that is, multiplies this vectors x component by that of "v"
	// and y by v's y, and so on
	scale(v, inplace=true)
	{
		if(inplace){
			this.x *= v.x;
			this.y *= v.y;
			this.z *= v.z;
			} else{
				var out = new Vector();
				out.x = this.x * v.x;
				out.y = this.y * v.y;
				out.z = this.z * v.z;
				return out;
			}
	}

	// returns a new vector whose x, y and z components are opposite this one
	// (additive opposite, so negation)
	inverse()
	{
		var out = new Vector();
		out.x = -this.x;
		out.y = -this.y;
		out.z = -this.z;
		return out;
	}

	// returns the magnitude of this vector
	// i.e. euclidean length or distance formula
	magnitude()
	{
		return Math.sqrt(Math.pow(this.x,2) + Math.pow(this.y,2) + Math.pow(this.z,2))
	}	

	// unit vector in the same direction as this vector
	// if this vector's magnitude is 0, this method should leave it unchanged
	normalize(inplace=true)
	{
		var mag = this.magnitude();
		if(inplace){
			if(mag != 0){
			this.x = this.x / mag;
			this.y = this.y / mag;
			this.z = this.z / mag;
			}
			} else{

				var out = new Vector();
				out.x = this.x;
				out.y = this.y;
				out.z = this.z;
				if(mag != 0){
				out.x = this.x / mag;
				out.y = this.y / mag;
				out.z = this.z / mag;}
				return out;
			}
	}

	// rotates this vector by quaternion "q"
	// REQUIRES QUATERNIONS
	rotate(q, inplace=true)
	{
		
	}

	// takes a list or array of vectors
	// returns their sum (i.e. add up all x components to get x... and so on)
	static sum(vectors)
	{
		var vector = new Vector();
		var vectorSum = new Vector();
			vectorSum.x = 0;
			vectorSum.y = 0;
			vectorSum.z = 0;
		for (vector of vectors) {
			vectorSum.x += vector.x;
			vectorSum.y += vector.y;
			vectorSum.z += vector.z;
		}
		return vectorSum;
	}

	// returns the cross product of the two input vectors "v1" and "v2"
	static cross(v1, v2)
	{
		var out = new Vector();
			out.x = (v1.y*v2.z) - (v1.z*v2.y);
			out.y = (v1.z*v2.x) - (v1.x*v2.z);
			out.z =  (v1.x*v2.y) - (v1.y*v2.x);
			return out;
	}

	// returns the dot product of the two input vectors "v1" and "v2"
	static dot(v1, v2)
	{
		
		var dot = v1.x * v2.x + v1.y * v2.y + v1.z * v2.z
			return dot;
	}

	// given quaternion "q", returns a vector with the same x, y and z components as q
	// REQUIRES QUATERNIONS
	static fromQuaternion(q)
	{
		
	}

	toString()
	{
		return "Vector("+this.x.toString() + "," + this.y.toString() + "," + this.z.toString() + ")";
	}

	toArray()
	{
		return new Float32Array([this.x, this.y, this.z]);
	}

	static equals(v1, v2)
	{
		if (! v1 instanceof Vector || ! v2 instanceof Vector)
		{
			console.log("%cInvalid inputs for Vector.equals.","color:red");
			return false;
		}

		var threshold = 0.001;

		if (Math.abs(v1.x - v2.x) > threshold || isNaN(Math.abs(v1.x - v2.x)))
		{
			return false;
		}
		
		if (Math.abs(v1.y - v2.y) > threshold || isNaN(Math.abs(v1.y - v2.y)))
		{
			return false;
		}
		
		if (Math.abs(v1.z - v2.z) > threshold || isNaN(Math.abs(v1.z - v2.z)))
		{
			return false;
		}

		return true;
	}
}