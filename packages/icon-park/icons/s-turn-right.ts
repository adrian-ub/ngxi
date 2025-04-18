import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSTurnRightIcon],svg[icon-park-s-turn-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M30 24L13 24C9 24 6 21 6 17C6 13 9 10 13 10L32 10"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M8 38L35 38C39 38 42 35 42 31C42 27 39 24 35 24L30 24"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M13 43L8 38L13 33"></svg:path><svg:circle cx="37.176" cy="10" r="5" fill="#2F88FF" transform="rotate(-180 37.176 10)"></svg:circle></svg:g>`,
})
export class IconParkSTurnRightIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
