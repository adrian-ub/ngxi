import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[magePackageBoxIcon],svg[mage-package-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m4.988 17.452l5.75 3.448a2.45 2.45 0 0 0 2.524 0l5.75-3.448c.366-.219.67-.53.88-.901c.205-.37.315-.786.318-1.21V8.278a2.46 2.46 0 0 0-1.198-2.122l-5.75-3.065a2.51 2.51 0 0 0-2.524 0l-5.75 3.065A2.46 2.46 0 0 0 3.79 8.277v7.065c.003.423.113.839.318 1.209c.21.371.514.682.88.901M19.881 7.078L12 11.81"></svg:path><svg:path d="M4.119 7.078L12 11.81v9.44m4.38-8.316V9.179L8.066 4.522"></svg:path></svg:g>`,
})
export class MagePackageBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
