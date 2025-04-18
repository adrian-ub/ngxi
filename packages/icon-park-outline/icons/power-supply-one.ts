import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlinePowerSupplyOneIcon],svg[icon-park-outline-power-supply-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M33 34H15L8 17.75L10 9h28l2 8.75zM18 4v5m12-5v5m-6 25v10h16v-7.368M18 21h12"></svg:path>`,
})
export class IconParkOutlinePowerSupplyOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
