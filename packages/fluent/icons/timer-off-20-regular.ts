import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTimerOff20RegularIcon],svg[fluent-timer-off-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.963 5.67L2.146 2.854a.5.5 0 1 1 .708-.708l15 15a.5.5 0 0 1-.708.708l-2.316-2.316A7 7 0 1 1 4.962 5.67m9.158 9.158L10 10.708v.792a.5.5 0 0 1-1 0V9.707L5.672 6.38a6 6 0 1 0 8.448 8.448M9 6.5v.379l1 1V6.5a.5.5 0 0 0-1 0m6.5 4.5a6 6 0 0 1-.351 2.027l.77.77a7 7 0 0 0-9.216-9.216l.77.77A6 6 0 0 1 15.5 11m-8-9a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm7.656 1.929a.5.5 0 1 0-.707.707l1.414 1.414a.5.5 0 1 0 .707-.707z"></svg:path>`,
})
export class FluentTimerOff20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
