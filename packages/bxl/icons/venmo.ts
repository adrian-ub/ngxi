import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxlVenmoIcon],svg[bxl-venmo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 3.27a7.5 7.5 0 0 1 .66 3.35c0 2.72-1.93 6.72-3.49 9.27L9.53 2.44l-6.91.65L5.79 22h7.88c3.45-4.54 7.71-11 7.71-16a7.3 7.3 0 0 0-1.06-4z"></svg:path>`,
})
export class BxlVenmoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
