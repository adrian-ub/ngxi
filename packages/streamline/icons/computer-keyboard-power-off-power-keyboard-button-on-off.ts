import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineComputerKeyboardPowerOffPowerKeyboardButtonOnOffIcon],svg[streamline-computer-keyboard-power-off-power-keyboard-button-on-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="13" height="13" x=".5" y=".5" rx="1"></svg:rect><svg:path d="M5.5 3.5h-2v2m0-2L7 7m1.57-3.13a3.5 3.5 0 1 1-4.7 4.7"></svg:path></svg:g>`,
})
export class StreamlineComputerKeyboardPowerOffPowerKeyboardButtonOnOffIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
