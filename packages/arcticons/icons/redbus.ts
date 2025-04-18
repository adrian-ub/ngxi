import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsRedbusIcon],svg[arcticons-redbus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="15.177" cy="32.525" r="4.134"></svg:circle><svg:circle cx="34.357" cy="31.028" r="4.134"></svg:circle><svg:path d="m19.077 31.154l11.201-1.213m7.776-.842l4.638-.46c1.964-6.99.273-15.487-4.248-16.68c-5.606-1.48-21.971-.303-30.963 3.532c-4.747 2.096-2.966 9.312-.557 16.979l4.024-.436"></svg:path></svg:g>`,
})
export class ArcticonsRedbusIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
