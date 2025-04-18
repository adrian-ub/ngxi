import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowParagraph16FilledIcon],svg[fluent-arrow-paragraph-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.25 2a.75.75 0 0 0-.75.75v2a.75.75 0 0 1-.75.75H9.56l.72-.72a.75.75 0 1 0-1.06-1.06l-2 2a.75.75 0 0 0 0 1.06l2 2a.75.75 0 1 0 1.06-1.06L9.56 7h2.19A2.25 2.25 0 0 0 14 4.75v-2a.75.75 0 0 0-.75-.75M5.72 8.22a.75.75 0 0 1 1.06 0l2 2a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 0 1-1.06-1.06l.72-.72H1.75a.75.75 0 0 1 0-1.5h4.69l-.72-.72a.75.75 0 0 1 0-1.06"></svg:path>`,
})
export class FluentArrowParagraph16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
