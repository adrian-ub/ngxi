import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonTextNewLineIcon],svg[carbon-text-new-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.586 14.414L24.172 18H6V8H4v10a2 2 0 0 0 2 2h18.172l-3.586 3.586L22 25l6-6l-6-6Z"></svg:path>`,
})
export class CarbonTextNewLineIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
