import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkCampIcon],svg[icon-park-camp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M44 35H40L24 6.5L8 35H4"></svg:path><svg:path fill="#2F88FF" d="M24 31C21.2386 31 19 34.5817 19 39V41H29V39C29 34.5817 26.7614 31 24 31Z"></svg:path><svg:path d="M4 41L44 41"></svg:path><svg:path d="M15 23C15 23 20 19 24 19C28 19 33 23 33 23"></svg:path><svg:path d="M40 6L38 9L40 12"></svg:path><svg:path d="M40 6L42 9L40 12"></svg:path><svg:path d="M7 17L6 19L7 21"></svg:path><svg:path d="M7 17L8 19L7 21"></svg:path></svg:g>`,
})
export class IconParkCampIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
