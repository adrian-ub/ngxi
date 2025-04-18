import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBlockBusterIcon],svg[arcticons-block-buster-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="29.514" height="29.514" x="9.38" y="9.243" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4.216" ry="4.216"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m37.662 10.477l-27.05 27.048M4.5 24.142h39"></svg:path>`,
})
export class ArcticonsBlockBusterIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
