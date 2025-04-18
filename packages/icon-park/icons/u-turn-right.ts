import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkUTurnRightIcon],svg[icon-park-u-turn-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M34 13H15C8.92487 13 4 17.9249 4 24V24C4 30.0751 8.92487 35 15 35H44"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M39 30L44 35L39 40"></svg:path><svg:circle cx="39" cy="13" r="5" fill="#2F88FF"></svg:circle></svg:g>`,
})
export class IconParkUTurnRightIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
