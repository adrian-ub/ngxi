import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPeopleChat16FilledIcon],svg[fluent-people-chat-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 7a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m4.422-.77A5.5 5.5 0 0 1 11.5 6a5.5 5.5 0 0 1 1.578.23a2 2 0 1 0-3.155 0M7.257 8H3a1.5 1.5 0 0 0-1.5 1.5v.075s0 2.925 4 2.925q.309 0 .587-.023A5.5 5.5 0 0 1 6 11.5c0-1.33.472-2.55 1.257-3.5m4.243 8a4.5 4.5 0 1 0-3.936-2.318l-.545 1.789a.41.41 0 0 0 .51.51l1.79-.544A4.5 4.5 0 0 0 11.5 16M9 10.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 1 0-1h2a.5.5 0 0 1 0 1z"></svg:path>`,
})
export class FluentPeopleChat16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
