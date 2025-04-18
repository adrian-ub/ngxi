import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsShopeeIcon],svg[arcticons-shopee-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.055 43.5h-18.11a4 4 0 0 1-3.973-3.537l-2.588-22.19h31.232l-2.588 22.19a4 4 0 0 1-3.973 3.537M13.352 17.773V15.16a10.66 10.66 0 0 1 21.32 0v2.613"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.529 36.983c1.154.865 2.308 1.153 4.615 1.153h1.154a3.75 3.75 0 0 0 0-7.5h-2.596a3.75 3.75 0 0 1 0-7.5h1.154c2.596 0 3.75.289 4.615 1.154"></svg:path>`,
})
export class ArcticonsShopeeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
