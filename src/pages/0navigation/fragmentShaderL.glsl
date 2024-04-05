// fragmentShaderG.glsl
varying vec2 vUv;
uniform sampler2D texture;
uniform float time; // Uniform for time

void main() {
    // Define the speed of scale change
    float speed = 0.1;
    
    // Scale the texture coordinates based on time to create the animation
    vec2 scaledUV = vUv * (1.0 + sin(time * speed));
    
    // Repeat the texture
    vec2 repeatedUV = fract(scaledUV * 10.0); // Adjust the factor for repetition
    
    // Get the color from the texture
    vec4 color = texture2D(texture, repeatedUV);
    
    // Output the final color
    gl_FragColor = color;
}