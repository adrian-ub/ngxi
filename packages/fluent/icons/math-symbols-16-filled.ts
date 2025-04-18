import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMathSymbols16FilledIcon],svg[fluent-math-symbols-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.75 6.25v-1h-1a.75.75 0 0 1 0-1.5h1v-1a.75.75 0 0 1 1.5 0v1h1a.75.75 0 0 1 0 1.5h-1v1a.75.75 0 0 1-1.5 0m6-2.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5zm-7.53 8.97a.75.75 0 1 0 1.06 1.06l1.22-1.22l1.22 1.22a.75.75 0 0 0 1.06-1.06L5.56 11.5l1.22-1.22a.75.75 0 1 0-1.06-1.06L4.5 10.44L3.28 9.22a.75.75 0 0 0-1.06 1.06l1.22 1.22zM11.5 10a1 1 0 1 0 0-2a1 1 0 0 0 0 2m-2 .25a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5zm3 2.75a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path>`,
})
export class FluentMathSymbols16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
