import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riKeyboardLineIcon],svg[ri-keyboard-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 17h18v2H3zm0-6h3v3H3zm5 0h3v3H8zM3 5h3v3H3zm10 0h3v3h-3zm5 0h3v3h-3zm-5 6h3v3h-3zm5 0h3v3h-3zM8 5h3v3H8z"></svg:path>`,
})
export class RiKeyboardLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
