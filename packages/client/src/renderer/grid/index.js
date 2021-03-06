import * as THREE from 'three'

export const init = scene => {
  const container = new THREE.Object3D()

  scene.add(container)
  container.name = 'ground'
  container.position.z = -1

  const canvas = document.createElement('canvas')
  canvas.width = canvas.height = 2
  const ctx = canvas.getContext('2d')
  ctx.fillStyle = '#00b9ee'
  ctx.fillStyle = '#54b4d0'
  ctx.beginPath()
  ctx.rect(0, 0, 2, 2)
  ctx.fill()
  ctx.fillStyle = 'rgba(0,0,0,0.2)'
  ctx.beginPath()
  ctx.rect(0, 0, 1, 1)
  ctx.fill()
  ctx.beginPath()
  ctx.rect(1, 1, 1, 1)
  ctx.fill()

  const L = 500

  const texture = new THREE.Texture(canvas)
  texture.needsUpdate = true
  texture.magFilter = texture.minFilter = THREE.NearestFilter
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping
  texture.repeat.set(L / 2, L / 2)

  const geo = new THREE.PlaneBufferGeometry(L, L)
  const mat = new THREE.MeshBasicMaterial({
    map: texture,
    // color: 0xf41f2f,
    transparent: true,
    // opacity: 0.4,
  })

  const mesh = new THREE.Mesh(geo, mat)
  mesh.name = 'grid'
  scene.add(mesh)

  mesh.position.x = 0.5
  mesh.position.y = 0.5

  // var geometry = new THREE.BoxGeometry(1, 1, 1)
  // var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
  // var cube = new THREE.Mesh(geometry, material)
  // cube.name = 'cube'
  // scene.add(cube)
}
