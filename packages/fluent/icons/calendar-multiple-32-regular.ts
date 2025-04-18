import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCalendarMultiple32RegularIcon],svg[fluent-calendar-multiple-32-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 6.5A4.5 4.5 0 0 1 6.5 2h15A4.5 4.5 0 0 1 26 6.5v15a4.5 4.5 0 0 1-4.5 4.5h-15A4.5 4.5 0 0 1 2 21.5zM6.5 4A2.5 2.5 0 0 0 4 6.5V7h20v-.5A2.5 2.5 0 0 0 21.5 4zM4 21.5A2.5 2.5 0 0 0 6.5 24h15a2.5 2.5 0 0 0 2.5-2.5V9H4zm24-12V5.757c1.206.808 2 2.183 2 3.743V22a8 8 0 0 1-8 8H9.5a4.5 4.5 0 0 1-3.742-2H22a6 6 0 0 0 6-6z"></svg:path>`,
})
export class FluentCalendarMultiple32RegularIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
