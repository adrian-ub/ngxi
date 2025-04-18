import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPollHorizontal24FilledIcon],svg[fluent-poll-horizontal-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 11.752a2.75 2.75 0 0 1-2.751 2.752h-14.5A2.752 2.752 0 1 1 4.75 9h14.5A2.75 2.75 0 0 1 22 11.752m-5 7a2.75 2.75 0 0 1-2.751 2.752h-9.5a2.752 2.752 0 1 1 0-5.504h9.5A2.75 2.75 0 0 1 17 18.752m-5-14a2.75 2.75 0 0 1-2.752 2.752H4.75A2.752 2.752 0 1 1 4.75 2h4.498A2.75 2.75 0 0 1 12 4.752"></svg:path>`,
})
export class FluentPollHorizontal24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
