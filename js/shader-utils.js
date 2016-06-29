////////////////////////////////////////////////////////////////////////////////
// The MIT License (MIT)
//
// Copyright (c) 2016 тнσмαѕ ѕтєιинσℓz
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
////////////////////////////////////////////////////////////////////////////////

/**
* Creates a GLSL shader
* @param {Object} gl
* @param {string} file The source for the shader
* @param {enum} type The type of shader (gl.VERTEX_SHADER or gl.FRAGMENT_SHADER)
*/
function createShader (gl, file, type) {
  var shader = gl.createShader( type );
  gl.shaderSource( shader, loadFile(file) );
  gl.compileShader( shader );

  if ( !gl.getShaderParameter(shader, gl.COMPILE_STATUS) ) {
    var info = gl.getShaderInfoLog( shader );
    throw "Could not compile WebGL program. \n\n" + info;
  }
}

/**
* Utility function that loads a shader with AJAX then compiles it.
* @param {string} name The file that you want to load.
* @param {enum} type The type of Shader to load.
* @returns {} The shader.
*/
function loadFile(name) {
  var xhr = new XMLHttpRequest(),
      okStatus = document.location.protocol === "file:" ? 0 : 200;
  xhr.open('GET', name, false);
  xhr.send(null);
  return xhr.status == okStatus ? xhr.responseText : null;
}


// /**
// * GLSL Shader.
// * @param {} gl
// * @param {string} vert The file location of the Vertex Shader.
// * @param {string} frag The file location of the Fragment Shader.
// * @constructor
// */
// createShader(gl, vert, frag) {
//   this.vShader = loadShader(gl, vert, gl.VERTEX_SHADER),
//   this.fShader = laodShader(gl, frag, gl.FRAGMENT_SHADER),
//   this.program = gl.createProgram();
//   gl.attachShader(program, vShader);
//   gl.attachShader(program, fShader);
//   gl.linkProgram(program);
//   if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
//      alert("Could not initialise shaders");
//   }
// }
//
// /**
// * Utility function that loads a shader with AJAX then compiles it.
// * @param {string} name The file that you want to load.
// * @param {enum} type The type of Shader to load.
// * @returns {} The shader.
// */
// compileShader(name, type) {
//   var xhr = new XMLHttpRequest(),
//       okStatus = document.location.protocol === "file:" ? 0 : 200;
//   xhr.open('GET', name, false);
//   xhr.send(null);
//
//     var source = xhr.responseText;
//
//   if (!source) {
//     alert("Could not find shader source: " + name);
//   }
//
//   var shader = gl.createShader(type), xhr.responseText;
//
//   gl.shaderSource(shader, source);
//   gl.compileShader(shader);
//
//   if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
//     alert(gl.getShaderInfoLog(shader));
//     return null;
//   }
//   return shader;
// }
