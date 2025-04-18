import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentClock16FilledIcon],svg[fluent-clock-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14M8 4.5V8h2.5a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 1 0"></svg:path>`,
})
export class FluentClock16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
