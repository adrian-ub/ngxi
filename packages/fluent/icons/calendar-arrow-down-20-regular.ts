import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCalendarArrowDown20RegularIcon],svg[fluent-calendar-arrow-down-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 3A2.5 2.5 0 0 0 3 5.5v9A2.5 2.5 0 0 0 5.5 17h4.1a5.5 5.5 0 0 1-.393-1H5.5A1.5 1.5 0 0 1 4 14.5V7h12v2.207q.524.149 1 .393V5.5A2.5 2.5 0 0 0 14.5 3zM4 5.5A1.5 1.5 0 0 1 5.5 4h9A1.5 1.5 0 0 1 16 5.5V6H4zm15 9a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-4.854 2.353l.003.003a.5.5 0 0 0 .348.144h.006a.5.5 0 0 0 .35-.146l2-2a.5.5 0 0 0-.707-.708L15 15.293V12.5a.5.5 0 0 0-1 0v2.793l-1.146-1.147a.5.5 0 0 0-.708.708z"></svg:path>`,
})
export class FluentCalendarArrowDown20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
