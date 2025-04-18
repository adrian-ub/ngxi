import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSkiingNordicIcon],svg[icon-park-skiing-nordic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-miterlimit="2" stroke-width="4"><svg:path fill="#2F88FF" d="M24 14C26.7614 14 29 11.7614 29 9C29 6.23858 26.7614 4 24 4C21.2386 4 19 6.23858 19 9C19 11.7614 21.2386 14 24 14Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M34 24H28L22 19L19 29L25 35L27 44"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M17 34L15 39L9 44"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M5 44H39L44 37"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M34 24V44"></svg:path></svg:g>`,
})
export class IconParkSkiingNordicIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
