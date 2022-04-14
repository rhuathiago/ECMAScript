let v1 = 10
let v2 = undefined
let v3 = null
let v4 = 0
let v5 = ''
let v6 = 'Uma string'


v1 ||= 100
v2 ||= 200
v3 ||= 300
v4 ||= 400
v5 ||= 500
v6 ||= 600

console.log('V1: ', v1)
console.log('V2: ', v2)
console.log('V3: ', v3)
console.log('V4: ', v4)
console.log('V5: ', v5)
console.log('V6: ', v6)