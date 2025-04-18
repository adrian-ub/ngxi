import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkPowerSupplyOneIcon],svg[icon-park-power-supply-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M33 34H15L8 17.75L10 9H38L40 17.75L33 34Z"></svg:path><svg:path stroke="#000" d="M18 4V9"></svg:path><svg:path stroke="#000" d="M30 4V9"></svg:path><svg:path stroke="#000" d="M24 34V44H40V36.6316"></svg:path><svg:path stroke="#fff" d="M18 21H30"></svg:path></svg:g>`,
})
export class IconParkPowerSupplyOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
