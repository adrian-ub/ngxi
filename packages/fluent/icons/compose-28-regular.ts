import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCompose28RegularIcon],svg[fluent-compose-28-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M25.78 3.28a.75.75 0 1 0-1.06-1.06L11.47 15.47L11.004 17l1.526-.47zM6.25 3A3.25 3.25 0 0 0 3 6.25v15.5A3.25 3.25 0 0 0 6.25 25h15.5A3.25 3.25 0 0 0 25 21.75V11.205a.75.75 0 0 0-1.5 0V21.75a1.75 1.75 0 0 1-1.75 1.75H6.25a1.75 1.75 0 0 1-1.75-1.75V6.25c0-.966.784-1.75 1.75-1.75h10.545a.75.75 0 1 0 0-1.5z"></svg:path>`,
})
export class FluentCompose28RegularIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
