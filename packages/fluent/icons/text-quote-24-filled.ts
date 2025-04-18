import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextQuote24FilledIcon],svg[fluent-text-quote-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 6a2.5 2.5 0 0 1 2.495 2.336l.005.206c-.01 3.555-1.24 6.614-3.705 9.223a.75.75 0 1 1-1.09-1.03c1.64-1.737 2.66-3.674 3.077-5.859A2.5 2.5 0 1 1 7.5 6m9 0a2.5 2.5 0 0 1 2.495 2.336l.005.206c-.01 3.56-1.238 6.614-3.705 9.223a.75.75 0 1 1-1.09-1.03c1.643-1.738 2.662-3.672 3.078-5.859A2.5 2.5 0 1 1 16.5 6"></svg:path>`,
})
export class FluentTextQuote24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
