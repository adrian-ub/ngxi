import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentClockBill20FilledIcon],svg[fluent-clock-bill-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 1a8 8 0 1 1-1 15.938V12a3 3 0 0 0-3-3H3a8 8 0 0 1 8-8m-.5 3a.5.5 0 0 0-.5.5v5l.008.09a.5.5 0 0 0 .492.41h3l.09-.008A.5.5 0 0 0 13.5 9H11V4.5l-.008-.09A.5.5 0 0 0 10.5 4M1 12a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2zm5.5 0h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1m0 2h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1m0 2h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1"></svg:path>`,
})
export class FluentClockBill20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
