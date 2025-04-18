import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentClock28FilledIcon],svg[fluent-clock-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.25 15.5h-5a.75.75 0 0 1-.75-.75v-7a.75.75 0 0 1 1.5 0V14h4.25a.75.75 0 0 1 0 1.5M14 2C7.372 2 2 7.373 2 14s5.372 12 12 12c6.627 0 12-5.373 12-12S20.627 2 14 2"></svg:path>`,
})
export class FluentClock28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
