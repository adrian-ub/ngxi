import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowUndo16RegularIcon],svg[fluent-arrow-undo-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 2.5a.5.5 0 0 1 1 0v3.843l3.171-3.171a4 4 0 0 1 5.657 5.656l-5.025 5.026a.5.5 0 0 1-.707-.708l5.025-5.025A3 3 0 1 0 7.878 3.88L4.757 7H8.5a.5.5 0 0 1 0 1H3.6a.6.6 0 0 1-.6-.6z"></svg:path>`,
})
export class FluentArrowUndo16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
