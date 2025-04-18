import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMailArrowClockwise20RegularIcon],svg[fluent-mail-arrow-clockwise-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 1a.5.5 0 0 0-1 0v.758A4.5 4.5 0 1 0 19 5.5a.5.5 0 0 0-1 0a3.5 3.5 0 1 1-1.696-3H15.5a.5.5 0 0 0 0 1h2A.5.5 0 0 0 18 3zm-1 9.4v4.1a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 3 14.5V7.963l6.746 3.968l.082.038a.5.5 0 0 0 .426-.038l2.23-1.312a5.5 5.5 0 0 1-1.043-.547L10 10.92L3 6.802V6.5A1.5 1.5 0 0 1 4.5 5h4.522a5.5 5.5 0 0 1 .185-1H4.5A2.5 2.5 0 0 0 2 6.5v8A2.5 2.5 0 0 0 4.5 17h11a2.5 2.5 0 0 0 2.5-2.5V9.743a5.5 5.5 0 0 1-1 .657"></svg:path>`,
})
export class FluentMailArrowClockwise20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
