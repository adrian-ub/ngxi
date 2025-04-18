import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTimer1020RegularIcon],svg[fluent-timer-10-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m7.45 1.429a.5.5 0 0 1 .706 0l1.414 1.414a.5.5 0 1 1-.707.707L14.45 4.636a.5.5 0 0 1 0-.707M9 6.5a.5.5 0 0 1 1 0v4a.5.5 0 0 1-1 0zM9.5 18q.774-.002 1.5-.161V16.81a6 6 0 1 1 4.442-6.648c.312-.1.644-.155.987-.162A7.002 7.002 0 0 0 2.5 11a7 7 0 0 0 7 7m4.5-4.5a2.5 2.5 0 0 1 5 0v3a2.5 2.5 0 0 1-5 0zm2.5-1.5a1.5 1.5 0 0 0-1.5 1.5v3a1.5 1.5 0 0 0 3 0v-3a1.5 1.5 0 0 0-1.5-1.5m-3.5-.5a.5.5 0 0 0-.658-.474l-1.5.5a.5.5 0 1 0 .316.948l.842-.28V18.5a.5.5 0 0 0 1 0z"></svg:path>`,
})
export class FluentTimer1020RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
