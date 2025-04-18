import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsScribdIcon],svg[arcticons-scribd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="15.895" cy="20.232" r="6.068" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.895 26.3c-9.78 0-8.249-14.316-1.473-19.265s15.023-1.885 21.68 2.651L33.57 13.28"></svg:path><svg:circle cx="32.105" cy="27.763" r="6.068" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.106 21.695c9.78 0 8.248 14.316 1.472 19.265s-18.214 2.167-24.214-4.055l2.533-3.594"></svg:path>`,
})
export class ArcticonsScribdIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
