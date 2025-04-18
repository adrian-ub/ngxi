import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidGreenHouseIcon],svg[icon-park-solid-green-house-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path d="M42 20v24H6V20L24 4z"></svg:path><svg:path stroke-linecap="round" d="M6 24h36M13 14v30m22-30v30"></svg:path><svg:path fill="currentColor" stroke-linecap="round" d="M20 32h8v12h-8z"></svg:path></svg:g>`,
})
export class IconParkSolidGreenHouseIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
