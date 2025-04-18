import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riKeyboardBoxLineIcon],svg[ri-keyboard-box-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 5v14h16V5zM3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m3 4h2v2H6zm0 4h2v2H6zm0 4h12v2H6zm5-4h2v2h-2zm0-4h2v2h-2zm5 0h2v2h-2zm0 4h2v2h-2z"></svg:path>`,
})
export class RiKeyboardBoxLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
