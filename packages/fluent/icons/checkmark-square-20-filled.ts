import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCheckmarkSquare20FilledIcon],svg[fluent-checkmark-square-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm7.354 5.354l-4 4a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L9 11.293l3.646-3.647a.5.5 0 0 1 .708.708"></svg:path>`,
})
export class FluentCheckmarkSquare20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
