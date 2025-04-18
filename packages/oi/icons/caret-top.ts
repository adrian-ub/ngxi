import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oiCaretTopIcon],svg[oi-caret-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2L0 6h8z"></svg:path>`,
})
export class OiCaretTopIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
