import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowPrevious16FilledIcon],svg[fluent-arrow-previous-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.296 11.736a.75.75 0 1 1-1.092 1.028l-4-4.25a.75.75 0 0 1 0-1.027l4-4.25a.75.75 0 1 1 1.092 1.028L8.78 8zM4.75 3a.75.75 0 0 0-.75.75v8.5a.75.75 0 0 0 1.5 0v-8.5A.75.75 0 0 0 4.75 3"></svg:path>`,
})
export class FluentArrowPrevious16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
