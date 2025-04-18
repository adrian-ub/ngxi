import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riDriveFillIcon],svg[ri-drive-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7.94 4.146l3.482 6.03l-5.94 10.293L2 14.44zm2.176 10.294H22l-3.482 6.029H6.635zm4.343-1L8.518 3.145h6.964l5.94 10.295z"></svg:path>`,
})
export class RiDriveFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
