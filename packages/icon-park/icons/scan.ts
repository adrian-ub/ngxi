import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkScanIcon],svg[icon-park-scan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M7 24L41 24"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24 7L24 41"></svg:path><svg:rect width="4" height="4" x="5" y="5" fill="#000"></svg:rect><svg:rect width="4" height="4" x="14" y="5" fill="#000"></svg:rect><svg:rect width="4" height="4" x="30" y="5" fill="#000"></svg:rect><svg:rect width="4" height="4" x="39" y="5" fill="#000"></svg:rect><svg:rect width="4" height="4" x="39" y="14" fill="#000"></svg:rect><svg:rect width="4" height="4" x="5" y="14" fill="#000"></svg:rect><svg:rect width="4" height="4" x="5" y="39" fill="#000"></svg:rect><svg:rect width="4" height="4" x="14" y="39" fill="#000"></svg:rect><svg:rect width="4" height="4" x="30" y="39" fill="#000"></svg:rect><svg:rect width="4" height="4" x="39" y="39" fill="#000"></svg:rect><svg:rect width="4" height="4" x="39" y="30" fill="#000"></svg:rect><svg:rect width="4" height="4" x="5" y="30" fill="#000"></svg:rect></svg:g>`,
})
export class IconParkScanIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
