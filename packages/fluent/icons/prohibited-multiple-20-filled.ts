import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentProhibitedMultiple20FilledIcon],svg[fluent-prohibited-multiple-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.11 5.11a5.5 5.5 0 0 1 7.213-.494l-7.707 7.707a5.5 5.5 0 0 1 .495-7.212m.567 8.274l7.707-7.707a5.501 5.501 0 0 1-7.707 7.707M13.95 4.05a7 7 0 1 0-9.9 9.9a7 7 0 0 0 9.9-9.9M17 9a8 8 0 0 1-9.765 7.805a7 7 0 0 0 9.57-9.57Q16.999 8.086 17 9"></svg:path>`,
})
export class FluentProhibitedMultiple20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
