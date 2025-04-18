import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignCalendar2FilledIcon],svg[tdesign-calendar-2-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 4h8V1h2v3h4v5H2V4h4V1h2zm14 7.004V22H2V11.004zm-10.743 8.903l5.657-5.657l-1.414-1.414l-4.243 4.242l-2.121-2.121l-1.414 1.414z"></svg:path>`,
})
export class TdesignCalendar2FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
