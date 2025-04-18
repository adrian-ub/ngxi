import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkUTurnUpIcon],svg[icon-park-u-turn-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M13 14L13 33C13 39.0751 17.9249 44 24 44V44C30.0751 44 35 39.0751 35 33V4"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M30 9L35 4L40 9"></svg:path><svg:circle cx="13" cy="9" r="5" fill="#2F88FF" transform="rotate(-90 13 9)"></svg:circle></svg:g>`,
})
export class IconParkUTurnUpIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
