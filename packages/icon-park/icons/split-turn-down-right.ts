import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSplitTurnDownRightIcon],svg[icon-park-split-turn-down-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M13 22H29C33.4183 22 37 25.5817 37 30V44"></svg:path><svg:circle cx="13" cy="8.944" r="5" fill="#2F88FF" transform="rotate(-90 13 8.944)"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M13 14V43"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M18 39L13 44L8 39"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M42 39L37 44L32 39"></svg:path></svg:g>`,
})
export class IconParkSplitTurnDownRightIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
