import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oiCaretRightIcon],svg[oi-caret-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 0v8l4-4z"></svg:path>`,
})
export class OiCaretRightIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
