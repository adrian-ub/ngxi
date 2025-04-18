import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkShuffleIcon],svg[icon-park-shuffle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M30 42H42V30"></svg:path><svg:path d="M42 18V6H30"></svg:path><svg:path d="M42 6L6 42"></svg:path><svg:path d="M31.5 31.5L34 34L39 39L41.5 41.5L42 42M24 24L6 6L24 24Z"></svg:path></svg:g>`,
})
export class IconParkShuffleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
