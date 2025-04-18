import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidPowerSupplyOneIcon],svg[icon-park-solid-power-supply-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSPowerSupplyOne0"><svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="M33 34H15L8 17.75L10 9h28l2 8.75z"></svg:path><svg:path stroke="#fff" d="M18 4v5m12-5v5m-6 25v10h16v-7.368"></svg:path><svg:path stroke="#000" d="M18 21h12"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSPowerSupplyOne0)"></svg:path>`,
})
export class IconParkSolidPowerSupplyOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
