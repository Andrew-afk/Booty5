/**
 * author       Mat Hopwood
 * copyright    2014 Mat Hopwood
 * More info    http://booty5.com
 */
"use strict";
/**
 * The Math class provides basic math utility functionality
 *
 * @class b5.Maths
 *
 */
b5.Maths = function()
{
};

/**
 * Multiplies two 3x2 matrices, placing the result into mat1 (mat1 = mat1 * mat2)
 * @param mat1 {number[]} First matrix
 * @param mat2 {number[]} First matrix
 */
b5.Maths.mulMatrix = function(mat1, mat2)
{
    var m0 = mat2[0];
    var m1 = mat2[1];
    var m2 = mat2[2];
    var m3 = mat2[3];
    var m4 = mat2[4];
    var m5 = mat2[5];
    var n0 = mat1[0];
    var n1 = mat1[1];
    var n2 = mat1[2];
    var n3 = mat1[3];
    var n4 = mat1[4];
    var n5 = mat1[5];
    mat1[0] = m0 * n0 + m2 * n1;
    mat1[1] = m1 * n0 + m3 * n1;
    mat1[2] = m0 * n2 + m2 * n3;
    mat1[3] = m1 * n2 + m3 * n3;
    mat1[4] = m0 * n4 + m2 * n5 + m4;
    mat1[5] = m1 * n4 + m3 * n5 + m5;
};

/**
 * Pre-multiplies two 3x2 matrices, placing the result into mat1 (mat1 = mat2 * mat1)
 * @param mat1 {number[]} First matrix
 * @param mat2 {number[]} First matrix
 */
b5.Maths.preMulMatrix = function(mat1, mat2)
{
    var m0 = mat1[0];
    var m1 = mat1[1];
    var m2 = mat1[2];
    var m3 = mat1[3];
    var m4 = mat1[4];
    var m5 = mat1[5];
    var n0 = mat2[0];
    var n1 = mat2[1];
    var n2 = mat2[2];
    var n3 = mat2[3];
    var n4 = mat2[4];
    var n5 = mat2[5];
    mat1[0] = m0 * n0 + m2 * n1;
    mat1[1] = m1 * n0 + m3 * n1;
    mat1[2] = m0 * n2 + m2 * n3;
    mat1[3] = m1 * n2 + m3 * n3;
    mat1[4] = m0 * n4 + m2 * n5 + m4;
    mat1[5] = m1 * n4 + m3 * n5 + m5;
};

/**
 * Multiplies a vector by the supplied 3z2 matrix
 * @param x {number} X coordinate
 * @param y {number} Y coordinate
 * @param mat {number[]} The matrix to multiple the vector by
 * @returns {{x: *, y: *}} The result x,y
 */
b5.Maths.vecMulMatrix = function(x, y, mat)
{
    var tx = x * mat[0] + y * mat[2] + mat[4];
    var ty = x * mat[1] + y * mat[3] + mat[5];
    return {x: tx, y: ty };
};

