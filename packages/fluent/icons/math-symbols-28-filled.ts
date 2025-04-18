import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMathSymbols28FilledIcon],svg[fluent-math-symbols-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 2.5a1 1 0 1 0-2 0V6H3a1 1 0 0 0 0 2h3.5v3.5a1 1 0 1 0 2 0V8H12a1 1 0 1 0 0-2H8.5zM16 6a1 1 0 1 0 0 2h9a1 1 0 1 0 0-2zm0 13a1 1 0 1 0 0 2h9a1 1 0 1 0 0-2zm4.75-1a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m1.5 5.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0M2.293 15.293a1 1 0 0 1 1.414 0L7.5 19.086l3.793-3.793a1 1 0 1 1 1.414 1.414L8.914 20.5l3.793 3.793a1 1 0 0 1-1.414 1.414L7.5 21.914l-3.793 3.793a1 1 0 0 1-1.414-1.414L6.086 20.5l-3.793-3.793a1 1 0 0 1 0-1.414"></svg:path>`,
})
export class FluentMathSymbols28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
