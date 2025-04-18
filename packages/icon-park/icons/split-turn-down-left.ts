import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSplitTurnDownLeftIcon],svg[icon-park-split-turn-down-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M37 21.9999H21C16.5817 21.9999 13 25.5817 13 29.9999V43.9999"></svg:path><svg:circle cx="37" cy="8.944" r="5" fill="#2F88FF" transform="rotate(-90 37 8.944)"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M37 13.9999V42.9999"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M42 38.9999L37 43.9999L32 38.9999"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M18 38.9999L13 43.9999L8 38.9999"></svg:path></svg:g>`,
})
export class IconParkSplitTurnDownLeftIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
