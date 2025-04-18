import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkUTurnLeftIcon],svg[icon-park-u-turn-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M14 13H33C39.0751 13 44 17.9249 44 24V24C44 30.0751 39.0751 35 33 35H4"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M9 40L4 35L9 30"></svg:path><svg:circle cx="9" cy="13" r="5" fill="#2F88FF"></svg:circle></svg:g>`,
})
export class IconParkUTurnLeftIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
