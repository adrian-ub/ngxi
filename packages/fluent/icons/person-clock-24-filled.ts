import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPersonClock24FilledIcon],svg[fluent-person-clock-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.022 14A6.47 6.47 0 0 0 11 17.5c0 1.63.6 3.121 1.593 4.263Q11.397 22 10 22c-3.145 0-5.532-.905-7.098-2.74a3.75 3.75 0 0 1-.898-2.434v-.578a2.25 2.25 0 0 1 2.249-2.25zM15 7.005a5 5 0 1 0-10 0a5 5 0 0 0 10 0M23 17.5a5.5 5.5 0 1 0-11 0a5.5 5.5 0 0 0 11 0M17.5 14a.5.5 0 0 1 .5.5V17h2a.5.5 0 0 1 0 1h-2.5a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5"></svg:path>`,
})
export class FluentPersonClock24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
