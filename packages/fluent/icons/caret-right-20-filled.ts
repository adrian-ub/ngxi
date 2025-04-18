import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCaretRight20FilledIcon],svg[fluent-caret-right-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 14.204a1 1 0 0 0 1.628.778l4.723-3.815a1.5 1.5 0 0 0 0-2.334L8.628 5.02A1 1 0 0 0 7 5.797z"></svg:path>`,
})
export class FluentCaretRight20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
