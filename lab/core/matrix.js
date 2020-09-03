// MATRIX CLASS DESCRIPTION:
/*
	The Matrix class will contain utilities for generating and manipulating
	any 4x4 matrices needed for our purposes in graphics.

	Resulting matrices will be represented in column-major form as 1D
	Float32Arrays with 16 elements.

	This means the first 4 elements are the 1st column, the next 4 are the
	second column, and so on...

	This class will have no fields; it will contain only static methods to
	to generate and manipulate matrices in this form. The matrices themselves
	will be assumed to be Float32Arrays with 16 elements.
*/

class Matrix
{
	// returns the identity matrix
	static identity()
	{
		var matrix = new Float32Array([1,0,0,0, 0,1,0,0, 0,0,1,0, 0,0,0,1]);
		return matrix;
	}

	// given two matrices (as Float32Arrays), multiplies them together and returns the result
	// don't forget, the inputs and result are in column-major form!
	static mul(mat1, mat2)
	{
		
	}

	// given an array or list of matrices, multiplies them all (in order, left to right) and returns the result
	// use a loop and the mul method.
	static prod(mats)
	{
		
	}

	// NOTE: We won't be implementing a method to apply matrix transformations to vectors.
	// 		 These transformations will be applied in our shaders, with GLSL's built-in matrix
	//       multiplication. We will often calculate a transform on the CPU with the matrix
	//       multiplication we've defined, and then apply it to every vector in a model in
	//       the shaders.

	static equals(mat1, mat2)
	{
		if (! mat1 instanceof Float32Array || ! mat2 instanceof Float32Array 
			|| mat1.length != 16 || mat2.length != 16)
		{
			console.log("%cInvalid inputs for Matrix.equals.","color:red");
			return false;
		}

		let threshold = 0.001;
		for (var i = 0; i < 16; i++)
		{
			if (Math.abs(mat1[i]-mat2[i]) > threshold)
			{
				return false;
			}
		}
		return true;
	}
}