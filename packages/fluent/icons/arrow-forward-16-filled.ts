import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowForward16FilledIcon],svg[fluent-arrow-forward-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.22 4.28a.75.75 0 0 1 1.06-1.06l3.5 3.5a.75.75 0 0 1 0 1.06l-3.5 3.5a.75.75 0 1 1-1.06-1.06L11.44 8H7.75a4.25 4.25 0 0 0-4.25 4.25a.75.75 0 0 1-1.5 0A5.75 5.75 0 0 1 7.75 6.5h3.69z"></svg:path>`,
})
export class FluentArrowForward16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
