import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneGreenHouseIcon],svg[icon-park-twotone-green-house-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTGreenHouse0"><svg:g fill="none" stroke="#fff" stroke-linejoin="round" stroke-width="4"><svg:path d="M42 20v24H6V20L24 4z"></svg:path><svg:path stroke-linecap="round" d="M6 24h36M13 14v30m22-30v30"></svg:path><svg:path fill="#555" stroke-linecap="round" d="M20 32h8v12h-8z"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTGreenHouse0)"></svg:path>`,
})
export class IconParkTwotoneGreenHouseIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
