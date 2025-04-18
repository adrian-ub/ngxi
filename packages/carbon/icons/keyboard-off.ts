import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonKeyboardOffIcon],svg[carbon-keyboard-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 12h2v2H6zm12 0h2v2h-2zM6 20h2v2H6zm0-4h2v2H6zm4 0h2v2h-2zm12-4h4v2h-4zm0 4h4v2h-4z"></svg:path><svg:path fill="currentColor" d="M14.2 10H28v13h2V10c0-1.1-.9-2-2-2H12.2zM30 28.6L3.4 2L2 3.4L6.6 8H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h20.6l4 4zM4 24V10h4.6l2 2H10v2h2.6l2 2H14v2h2.6l2 2H10v2h10.6l2 2z"></svg:path>`,
})
export class CarbonKeyboardOffIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
