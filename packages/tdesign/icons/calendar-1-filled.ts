import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignCalendar1FilledIcon],svg[tdesign-calendar-1-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 4h8V1h2v3h4v5H2V4h4V1h2zm14 7v11H2V11zM9.004 13.497H7v2.004h2.004zm4 0H11v2.004h2.004zm4 0H15v2.004h2.004zm-8 4H7v2.004h2.004zm4 0H11v2.004h2.004zm4 0H15v2.004h2.004z"></svg:path>`,
})
export class TdesignCalendar1FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
