customShader = {
	wireframe:true,
    uniforms: {
        u_time: {
            type: "f",
            value: 0.001
        }
    },
    vertexShader: [
        "void main() {",
        "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",
        "}",
    ].join("\n"),
    fragmentShader: [
        "uniform float u_time;",
        "void main() {",
        "gl_FragColor = vec4(abs(sin(u_time)),abs(cos(u_time)),abs(tan(u_time)),1.0);",
        "}",
    ].join("\n")
};