import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiMouseIcon],svg[zmdi-mouse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 7q64 8 106.5 56T341 176H192zM0 304v-85h341v85q0 71-50 121t-120.5 50T50 425T0 304M149 7v169H0q0-65 43-113T149 7"></svg:path>`,
})
export class ZmdiMouseIcon {
  readonly viewBox = input("0 0 344 480")
  readonly width = input("0.72em")
  readonly height = input("1em")
}
