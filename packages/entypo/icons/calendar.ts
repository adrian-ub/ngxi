import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[entypoCalendarIcon],svg[entypo-calendar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 3h-1v2h-3V3H7v2H4V3H3c-1.101 0-2 .9-2 2v12c0 1.1.899 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 14H3V9h14zM6.5 1h-2v3.5h2zm9 0h-2v3.5h2z"></svg:path>`,
})
export class EntypoCalendarIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
