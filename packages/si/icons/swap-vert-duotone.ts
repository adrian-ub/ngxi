import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siSwapVertDuotoneIcon],svg[si-swap-vert-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m11 17l-4 4m0 0l-4-4m4 4V3m14 4l-4-4m0 0l-4 4m4-4v18"></svg:path>`,
})
export class SiSwapVertDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
