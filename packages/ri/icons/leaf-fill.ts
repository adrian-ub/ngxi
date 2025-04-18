import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riLeafFillIcon],svg[ri-leaf-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.998 3v2c0 9.627-5.373 14-12 14H7.096c.212-3.012 1.15-4.835 3.598-7.001c1.204-1.065 1.102-1.68.509-1.327C7.119 13.102 5.09 16.386 5 21.63l-.003.37h-2c0-1.363.116-2.6.346-3.732Q2.999 16.327 2.998 13c0-5.523 4.477-10 10-10c2 0 4 1 8 0"></svg:path>`,
})
export class RiLeafFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
