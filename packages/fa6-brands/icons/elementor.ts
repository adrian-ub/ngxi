import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fa6BrandsElementorIcon],svg[fa6-brands-elementor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M.361 256C.361 397 114 511 255 511c142 0 256-114 256-255C511 116 397 2.05 255 2.05C114 2.05.361 116 .361 256M192 150v213h-43V150zm42 0h128v43H234zm128 85v43H234v-43zm-128 85h128v43H234z"></svg:path>`,
})
export class Fa6BrandsElementorIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
