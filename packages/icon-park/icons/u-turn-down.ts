import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkUTurnDownIcon],svg[icon-park-u-turn-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M35 34V15C35 8.92487 30.0751 4 24 4V4C17.9249 4 13 8.92487 13 15V44"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M18 39L13 44L8 39"></svg:path><svg:circle cx="35" cy="39" r="5" fill="#2F88FF" transform="rotate(90 35 39)"></svg:circle></svg:g>`,
})
export class IconParkUTurnDownIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
