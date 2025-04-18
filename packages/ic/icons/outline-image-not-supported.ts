import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icOutlineImageNotSupportedIcon],svg[ic-outline-image-not-supported-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.9 21.9l-6.1-6.1l-2.69-2.69L5 5L3.59 3.59L2.1 2.1L.69 3.51L3 5.83V19c0 1.1.9 2 2 2h13.17l2.31 2.31zM5 19V7.83l6.84 6.84l-.84 1.05L9 13l-3 4h8.17l2 2zM7.83 5l-2-2H19c1.1 0 2 .9 2 2v13.17l-2-2V5z"></svg:path>`,
})
export class IcOutlineImageNotSupportedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
