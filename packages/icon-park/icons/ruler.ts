import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkRulerIcon],svg[icon-park-ruler-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M44 14L34 4L30.25 7.75L26.5 11.5L19 19L11.5 26.5L7.75 30.25L4 34L14 44L44 14Z"></svg:path><svg:path d="M30.25 7.75L7.75 30.25"></svg:path><svg:path d="M9 29L13 33"></svg:path><svg:path d="M14 24L20 30"></svg:path><svg:path d="M19 19L23 23"></svg:path><svg:path d="M24 14L30 20"></svg:path><svg:path d="M29 9L33 13"></svg:path></svg:g>`,
})
export class IconParkRulerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
