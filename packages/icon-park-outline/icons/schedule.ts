import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineScheduleIcon],svg[icon-park-outline-schedule-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="4"><svg:rect width="40" height="30" x="4" y="10" stroke-linejoin="round" rx="2"></svg:rect><svg:path d="M14 6v8m11 9H14m20 8H14M34 6v8"></svg:path></svg:g>`,
})
export class IconParkOutlineScheduleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
