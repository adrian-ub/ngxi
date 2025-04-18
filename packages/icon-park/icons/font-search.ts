import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkFontSearchIcon],svg[icon-park-font-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-width="4"><svg:circle cx="22.834" cy="22.834" r="17" fill="#2F88FF" stroke="#000" stroke-linejoin="round"></svg:circle><svg:path stroke="#000" d="M35 35L41 41"></svg:path><svg:path stroke="#fff" stroke-linejoin="round" d="M23 17V31"></svg:path><svg:path stroke="#fff" stroke-linejoin="round" d="M18 17H23H28"></svg:path></svg:g>`,
})
export class IconParkFontSearchIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
