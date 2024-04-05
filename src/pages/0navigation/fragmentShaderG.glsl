varying vec3 vNormal;
varying vec3 vPosition;

uniform vec3 topColor;
uniform vec3 bottomColor;
uniform float uTime; // Uniform for time

void main() {
    // Calculate the displacement along the x-axis based on time
    float displacement = sin(uTime) * 0.9; // Adjust the amplitude (0.5) for smooth movement

    // Map the x-coordinate to [0, 1] and add displacement
    float gradient = (vPosition.x + 3.0 + displacement) / 9.0; 

    // Mix the colors based on the gradient
    vec3 color = mix(bottomColor, topColor, gradient);

    // Set the fragment color
    gl_FragColor = vec4(color, 1.0);
}
