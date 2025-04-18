import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineComputerKeyboardAsterisk2AsteriskStarKeyboardIcon],svg[streamline-computer-keyboard-asterisk-2-asterisk-star-keyboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 7H.5m10-5.5l-7 11m0-11l7 11"></svg:path>`,
})
export class StreamlineComputerKeyboardAsterisk2AsteriskStarKeyboardIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
