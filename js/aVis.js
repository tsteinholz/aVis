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

var gl,
    canvas,
    vShaderSource = "attribute vec4 position;\n"+
              "void main() {\n"+
              "  gl_Position = position;\n"+
              "}\n",
    fShaderSource = "void main() {\n"+
              "  gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);\n"+
              "}\n";;

function createShader (gl, sourceCode, type) {
  // Compiles either a shader of type gl.VERTEX_SHADER or gl.FRAGMENT_SHADER
  var shader = gl.createShader(type);
  gl.shaderSource(shader, sourceCode);
  gl.compileShader(shader);

  if ( !gl.getShaderParameter(shader, gl.COMPILE_STATUS) ) {
    var info = gl.getShaderInfoLog( shader );
    throw "Could not compile WebGL program. \n\n" + info;
  }
  return shader;
}

window.onload = function init() {

    canvas = document.getElementById("gl-canvas");
    gl = WebGLUtils.setupWebGL(canvas);
    if (!gl) { alert("WebGL isn't available"); }

    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.clearColor(1.0, 1.0, 1.0, 1.0);

    var vShader = createShader(gl, vShaderSource, gl.VERTEX_SHADER),
        fShader = createShader(gl, fShaderSource, gl.FRAGMENT_SHADER),
        program = gl.createProgram();
    
    gl.attachShader(program, vShader);
    gl.attachShader(program, fShader);
    gl.linkProgram(program);

    gl.useProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        alert("Could not initialise shaders");
    }
    
//    bufferId = gl.createBuffer(),
//        vPos = gl.getAttribLocation(program, "vPosition");
    
    

    //gl.bindBuffer(gl.ARRAY_BUFFER, bufferId);

    // Associate out shader variables with our data buffer
    //gl.enableVertexAttribArray(vPos);

//    render();
};
