import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentComment24FilledIcon],svg[fluent-comment-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.25 3A3.25 3.25 0 0 0 2 6.25v8.5A3.25 3.25 0 0 0 5.25 18H6v2.75c0 1.03 1.176 1.618 2 1L13 18h5.75A3.25 3.25 0 0 0 22 14.75v-8.5A3.25 3.25 0 0 0 18.75 3z"></svg:path>`,
})
export class FluentComment24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
