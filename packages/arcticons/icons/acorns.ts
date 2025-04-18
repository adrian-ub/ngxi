import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAcornsIcon],svg[arcticons-acorns-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.808 22.467c-1.592 7.905 1.1 17.893 11.405 19.233c.136.018 1.012 1.078 1.8 1.8l1.8-1.8c12.218-2.218 11.808-14.736 11.226-19.12"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.31 22.071C6.67 17.188 12.117 9.386 22.406 9.05a5.95 5.95 0 0 0 .117-4.55a8.74 8.74 0 0 1 3.578 4.653c11.379.53 14.683 8.85 12.718 12.926c-3.433 1.573-22.802 2.156-29.51-.008Z"></svg:path>`,
})
export class ArcticonsAcornsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
