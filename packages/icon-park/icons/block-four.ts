import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkBlockFourIcon],svg[icon-park-block-four-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M6 12H18V24H6V12Z"></svg:path><svg:path d="M18 12H30V24H18V12Z"></svg:path><svg:path d="M30 12H42V24H30V12Z"></svg:path><svg:path d="M18 24H30V36H18V24Z"></svg:path></svg:g>`,
})
export class IconParkBlockFourIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
