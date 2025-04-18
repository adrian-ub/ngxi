import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTimer1020FilledIcon],svg[fluent-timer-10-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 2a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm7.656 1.929a.5.5 0 1 0-.707.707l1.414 1.414a.5.5 0 1 0 .707-.707zm1.273 6.072a3.5 3.5 0 0 0-2.482 1.104a1.5 1.5 0 0 0-1.921-1.028l-1.5.5A1.5 1.5 0 0 0 11 13.5v4.339A7 7 0 1 1 16.43 10M9 10.5a.5.5 0 0 0 1 0v-4a.5.5 0 0 0-1 0zm5 3a2.5 2.5 0 0 1 5 0v3a2.5 2.5 0 0 1-5 0zm2.5-1.5a1.5 1.5 0 0 0-1.5 1.5v3a1.5 1.5 0 0 0 3 0v-3a1.5 1.5 0 0 0-1.5-1.5m-3.5-.5a.5.5 0 0 0-.658-.474l-1.5.5a.5.5 0 1 0 .316.948l.842-.28V18.5a.5.5 0 0 0 1 0z"></svg:path>`,
})
export class FluentTimer1020FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
