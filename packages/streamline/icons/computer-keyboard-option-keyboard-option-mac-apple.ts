import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineComputerKeyboardOptionKeyboardOptionMacAppleIcon],svg[streamline-computer-keyboard-option-keyboard-option-mac-apple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="13" height="13" x=".5" y=".5" rx="1"></svg:rect><svg:path d="M3.5 6h2L8 9h2.5m-2-3h2"></svg:path></svg:g>`,
})
export class StreamlineComputerKeyboardOptionKeyboardOptionMacAppleIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
