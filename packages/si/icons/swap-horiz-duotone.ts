import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siSwapHorizDuotoneIcon],svg[si-swap-horiz-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M7 11L3 7m0 0l4-4M3 7h18m-4 14l4-4m0 0l-4-4m4 4H3"></svg:path>`,
})
export class SiSwapHorizDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
