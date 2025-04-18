import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiBucketIcon],svg[openmoji-bucket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#92d3f5" d="M44.01 60.96H27.44a3.857 3.857 0 0 1-3.816-3.444l-2.695-23.7h29.83l-2.936 23.74a3.864 3.864 0 0 1-3.811 3.406z"></svg:path><svg:path fill="#61b2e4" d="m45.04 33.81l-2.937 23.74a3.864 3.864 0 0 1-3.811 3.406h5.716a3.864 3.864 0 0 0 3.811-3.406l2.936-23.74z"></svg:path><svg:path fill="#61b2e4" d="M50.97 35.87H20.95a2.17 2.17 0 0 1-2.156-2.183v-.792a5.46 5.46 0 0 1 5.418-5.486h23.5a5.46 5.46 0 0 1 5.418 5.486v.792a2.17 2.17 0 0 1-2.155 2.183z"></svg:path><svg:path fill="#fff" d="M40.73 8.888v5.155h-9.552V8.888z"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m49.18 38.23l-2.374 19.19a2.836 2.836 0 0 1-2.802 2.504h-16.57a2.836 2.836 0 0 1-2.805-2.532l-2.179-19.17m28.52-3.382a1.145 1.145 0 0 0 1.138-1.152v-.794a4.43 4.43 0 0 0-4.4-4.456q0 0 0 0h-23.5a4.43 4.43 0 0 0-4.4 4.456q0 0 0 0v.793a1.145 1.145 0 0 0 1.138 1.152h0zM31.178 8.887h9.552v5.155h-9.552z"></svg:path><svg:path d="M40.71 11.54A20.7 20.7 0 0 1 56 31.8M31.18 11.57A20.7 20.7 0 0 0 16 31.8m.008.023h1.084m37.825.074h1.085"></svg:path></svg:g>`,
})
export class OpenmojiBucketIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
