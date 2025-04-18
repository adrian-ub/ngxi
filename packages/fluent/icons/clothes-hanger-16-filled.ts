import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentClothesHanger16FilledIcon],svg[fluent-clothes-hanger-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 3.5a1 1 0 0 0-.904.572a.75.75 0 0 1-1.355-.643a2.5 2.5 0 1 1 3.544 3.216a1.8 1.8 0 0 0-.43.343c-.094.11-.105.176-.105.206c0 .07.038.136.1.17l5.108 2.838A2.026 2.026 0 0 1 12.974 14H3.022a2.026 2.026 0 0 1-.985-3.796l3.849-2.14a.75.75 0 1 1 .728 1.311l-3.848 2.14a.525.525 0 0 0 .256.985h9.952a.526.526 0 0 0 .256-.986L8.12 8.675a1.7 1.7 0 0 1-.871-1.48c0-.491.215-.888.46-1.177c.24-.285.54-.502.803-.66A1 1 0 0 0 8 3.5"></svg:path>`,
})
export class FluentClothesHanger16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
