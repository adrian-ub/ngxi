import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCalculatorMultiple16FilledIcon],svg[fluent-calculator-multiple-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.5 1A2.5 2.5 0 0 0 2 3.5v8A2.5 2.5 0 0 0 4.5 14h6a2.5 2.5 0 0 0 2.5-2.5v-8A2.5 2.5 0 0 0 10.5 1zM5 8a1 1 0 1 1 2 0a1 1 0 0 1-2 0m3 0a1 1 0 1 1 2 0a1 1 0 0 1-2 0m-3 3.031a1 1 0 1 1 2 0a1 1 0 0 1-2 0m4-1a1 1 0 1 1 0 2a1 1 0 0 1 0-2M5 3h5a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m1.5 13a2.5 2.5 0 0 1-2-1h6a3.5 3.5 0 0 0 3.5-3.5v-8c.607.456 1 1.182 1 2v6a4.5 4.5 0 0 1-4.5 4.5z"></svg:path>`,
})
export class FluentCalculatorMultiple16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
