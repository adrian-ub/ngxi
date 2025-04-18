import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentConferenceRoom20FilledIcon],svg[fluent-conference-room-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.186 2.113a.5.5 0 0 1 .419-.1l7 1.499a.5.5 0 0 1 .394.489v12a.5.5 0 0 1-.395.489l-7 1.5A.5.5 0 0 1 9 17.503v-15a.5.5 0 0 1 .186-.389m3.316 7.888a.75.75 0 1 0-1.5 0a.75.75 0 0 0 1.5 0m-4.5-6.998H3.5a.5.5 0 0 0-.5.5v12.995a.5.5 0 0 0 .5.5h4.502z"></svg:path>`,
})
export class FluentConferenceRoom20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
