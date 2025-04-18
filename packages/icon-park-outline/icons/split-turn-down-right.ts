import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineSplitTurnDownRightIcon],svg[icon-park-outline-split-turn-down-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M13 22h16a8 8 0 0 1 8 8v14"></svg:path><svg:circle cx="13" cy="8.944" r="5" transform="rotate(-90 13 8.944)"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M13 14v29m5-4l-5 5l-5-5m34 0l-5 5l-5-5"></svg:path></svg:g>`,
})
export class IconParkOutlineSplitTurnDownRightIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
