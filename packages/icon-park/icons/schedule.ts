import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkScheduleIcon],svg[icon-park-schedule-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-width="4"><svg:rect width="40" height="30" x="4" y="10" fill="#2F88FF" stroke="#000" stroke-linejoin="round" rx="2"></svg:rect><svg:path stroke="#000" d="M14 6V14"></svg:path><svg:path stroke="#fff" d="M25 23L14 23"></svg:path><svg:path stroke="#fff" d="M34 31L14 31"></svg:path><svg:path stroke="#000" d="M34 6V14"></svg:path></svg:g>`,
})
export class IconParkScheduleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
