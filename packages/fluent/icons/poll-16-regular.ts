import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPoll16RegularIcon],svg[fluent-poll-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 1a2 2 0 0 0-2 2v10a2 2 0 1 0 4 0V3a2 2 0 0 0-2-2m1 2v10a1 1 0 1 1-2 0V3a1 1 0 0 1 2 0M3 7a2 2 0 0 0-2 2v4a2 2 0 1 0 4 0V9a2 2 0 0 0-2-2m1 6a1 1 0 1 1-2 0V9a1 1 0 0 1 2 0zm7-6a2 2 0 1 1 4 0v6a2 2 0 1 1-4 0zm3 0a1 1 0 1 0-2 0v6a1 1 0 1 0 2 0z"></svg:path>`,
})
export class FluentPoll16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
