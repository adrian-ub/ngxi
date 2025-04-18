import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkClassroomIcon],svg[icon-park-classroom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:circle cx="24" cy="13" r="9" fill="#2F88FF"></svg:circle><svg:path d="M5 44C5 35.5625 11.175 27.6875 16.4 26C16.4 26 21.15 31.0625 24 34.4375L31.6 26C35.875 26.5625 43 35.5625 43 44"></svg:path><svg:path stroke-linecap="round" d="M2 44L46 44"></svg:path></svg:g>`,
})
export class IconParkClassroomIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
