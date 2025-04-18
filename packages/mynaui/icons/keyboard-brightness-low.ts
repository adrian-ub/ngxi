import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiKeyboardBrightnessLowIcon],svg[mynaui-keyboard-brightness-low-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 17h8M3 17h1m8-8v1m6 2.207l.707-.707m-13 .707L5 11.5M20 17h1"></svg:path>`,
})
export class MynauiKeyboardBrightnessLowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
