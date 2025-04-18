import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[wiMoonFullIcon],svg[wi-moon-full-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.74 14.44c0 2.04.5 3.93 1.51 5.65s2.37 3.1 4.1 4.1S12.96 25.7 15 25.7s3.92-.5 5.65-1.51s3.09-2.37 4.09-4.1s1.51-3.61 1.51-5.65s-.5-3.92-1.51-5.65s-2.37-3.09-4.09-4.09S17.04 3.19 15 3.19s-3.92.51-5.65 1.51s-3.1 2.37-4.1 4.09s-1.51 3.61-1.51 5.65"></svg:path>`,
})
export class WiMoonFullIcon {
  readonly viewBox = input("0 0 30 30")
  readonly width = input("1em")
  readonly height = input("1em")
}
