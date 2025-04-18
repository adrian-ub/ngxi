import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTag16FilledIcon],svg[fluent-tag-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.587 7.314a1.99 1.99 0 0 0 0 2.822l3.296 3.28a2.013 2.013 0 0 0 2.836 0l4.67-4.647a2 2 0 0 0 .587-1.397L14 4.01A2 2 0 0 0 11.987 2l-3.25.014a2 2 0 0 0-1.41.584zM11 6a1 1 0 1 1 0-2a1 1 0 0 1 0 2"></svg:path>`,
})
export class FluentTag16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
