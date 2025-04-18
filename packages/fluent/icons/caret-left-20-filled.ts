import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCaretLeft20FilledIcon],svg[fluent-caret-left-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 14.204a1 1 0 0 1-1.628.778l-4.723-3.815a1.5 1.5 0 0 1 0-2.334l4.723-3.814A1 1 0 0 1 13 5.797z"></svg:path>`,
})
export class FluentCaretLeft20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
