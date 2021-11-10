import './style.css'
import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Objects
 */

const group = new THREE.Group()
scene.add(group)
const cube1 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0xff0000 }),
)
group.add(cube1)

const cube2 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0x00ff00 }),
)
cube2.position.set(1.5, 0, 0)
group.add(cube2)

const cube3 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0x0000ff }),
)
cube3.position.set(-1.5, 0, 0)
group.add(cube3)

group.position.y = 1
group.rotation.y = Math.PI * 0.25

// const geometry = new THREE.BoxGeometry(1, 1, 1)
// const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
// const mesh = new THREE.Mesh(geometry, material)
// mesh.position.x = 0.7
// mesh.position.y = -0.7
// mesh.position.z = 0.7

// Alternative solution to the above
// mesh.position.set(0.8, -0.6, 1)

// Vector3.position has lots of useful methods
// .length = distance between the center of the scene and our mesh position
// console.log(mesh.position.length())

// scene.add(mesh)

// Set the vector's length to 1
// mesh.position.normalize()

// To see axes on the scene
const axesHelper = new THREE.AxesHelper(1)
scene.add(axesHelper)

// Scale
// mesh.scale.set(0.5, 0.5, 1)

// Rotate objects: rotation or quaternion

// mesh.rotation.set(Math.PI, 1, 0)
// To change the axis order of rotation
// mesh.rotation.reorder('YXZ')

/**
 * Sizes
 */
const sizes = {
  width: 800,
  height: 600,
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
camera.position.y = 0.2
camera.position.x = 0.2
// .distanceTo = distance between the camera and the mesh position

// To focus the camera on a specific position
// camera.lookAt(mesh.position)

// console.log(mesh.position.distanceTo(camera.position))

scene.add(camera)

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)
