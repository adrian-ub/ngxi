import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineComputerKeyboardComputerKeyboardDeviceElectronicsDvorakQwertyIcon],svg[streamline-computer-keyboard-computer-keyboard-device-electronics-dvorak-qwerty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="13" height="8" x=".5" y="5.5" rx="1"></svg:rect><svg:path d="M3.5 10.75h7m-7-2.5h7m-7-2.75v-1a2 2 0 0 1 2-2h4a2 2 0 0 0 2-2"></svg:path></svg:g>`,
})
export class StreamlineComputerKeyboardComputerKeyboardDeviceElectronicsDvorakQwertyIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
