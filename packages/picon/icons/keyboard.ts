import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconKeyboardIcon],svg[picon-keyboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 1v1h1V1m3 0v1h1V1M4 1v1h1V1m0 2v1h1V3M3 3v1h1V3M1 3v1h1V3m0 2v1h4V5"></svg:path>`,
})
export class PiconKeyboardIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
