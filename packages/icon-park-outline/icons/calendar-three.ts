import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineCalendarThreeIcon],svg[icon-park-outline-calendar-three-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="40" height="36" x="4" y="8" rx="2"></svg:rect><svg:path d="M4 20h40M4 32h40M17 4v8m14-8v8m-14 8v24m14-24v24m13-31v26M4 13v26m10 5h20"></svg:path></svg:g>`,
})
export class IconParkOutlineCalendarThreeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
