import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonCaretLeftIcon],svg[carbon-caret-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20 24l-10-8l10-8z"></svg:path>`,
})
export class CarbonCaretLeftIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
