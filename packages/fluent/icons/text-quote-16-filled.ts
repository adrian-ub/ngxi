import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextQuote16FilledIcon],svg[fluent-text-quote-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.646 11.146c1.387-1.386 2.008-2.76 2.24-4.352A2 2 0 1 1 13 5c-.001 2.592-.528 4.734-2.647 6.854a.5.5 0 0 1-.708-.708m-6 0c1.387-1.386 2.009-2.76 2.24-4.352A2 2 0 1 1 7 5c-.001 2.592-.528 4.734-2.647 6.854a.5.5 0 0 1-.708-.708"></svg:path>`,
})
export class FluentTextQuote16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
