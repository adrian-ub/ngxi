import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowNext16FilledIcon],svg[fluent-arrow-next-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.704 11.736a.75.75 0 1 0 1.092 1.028l4-4.25a.75.75 0 0 0 0-1.027l-4-4.25a.75.75 0 1 0-1.092 1.028L7.22 8zM11.25 3a.75.75 0 0 1 .75.75v8.5a.75.75 0 0 1-1.5 0v-8.5a.75.75 0 0 1 .75-.75"></svg:path>`,
})
export class FluentArrowNext16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
