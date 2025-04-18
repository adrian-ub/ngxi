import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siCopyAltDuotoneIcon],svg[si-copy-alt-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M12.6 3H5.4A2.4 2.4 0 0 0 3 5.4v7.2A2.4 2.4 0 0 0 5.4 15h7.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 12.6 3"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M18 9h.6c1.33 0 2.4 1.07 2.4 2.4v7.2c0 1.33-1.07 2.4-2.4 2.4h-7.2C10.07 21 9 19.93 9 18.6V18M5.4 3h7.2A2.4 2.4 0 0 1 15 5.4v7.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 12.6V5.4A2.4 2.4 0 0 1 5.4 3"></svg:path></svg:g>`,
})
export class SiCopyAltDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
