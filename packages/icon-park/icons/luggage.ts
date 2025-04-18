import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkLuggageIcon],svg[icon-park-luggage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-width="4"><svg:rect width="32" height="26" x="8" y="14" fill="#2F88FF" stroke="#000" stroke-linejoin="round" rx="2"></svg:rect><svg:path stroke="#fff" d="M20 23L20 31"></svg:path><svg:path stroke="#000" stroke-linejoin="round" d="M15 40V44"></svg:path><svg:path stroke="#000" stroke-linejoin="round" d="M33 40V44"></svg:path><svg:path stroke="#fff" d="M28 23V31"></svg:path><svg:path stroke="#000" stroke-linejoin="round" d="M19 4H29"></svg:path><svg:path stroke="#000" stroke-linejoin="round" d="M24 4L24 14"></svg:path></svg:g>`,
})
export class IconParkLuggageIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
