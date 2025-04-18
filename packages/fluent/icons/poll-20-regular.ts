import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPoll20RegularIcon],svg[fluent-poll-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 4a2 2 0 1 1 4 0v12a2 2 0 1 1-4 0zm2-1a1 1 0 0 0-1 1v12a1 1 0 1 0 2 0V4a1 1 0 0 0-1-1m-8 9a2 2 0 1 1 4 0v4a2 2 0 1 1-4 0zm2-1a1 1 0 0 0-1 1v4a1 1 0 1 0 2 0v-4a1 1 0 0 0-1-1m12-5a2 2 0 0 0-2 2v8a2 2 0 1 0 4 0V8a2 2 0 0 0-2-2m-1 2a1 1 0 1 1 2 0v8a1 1 0 1 1-2 0z"></svg:path>`,
})
export class FluentPoll20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
