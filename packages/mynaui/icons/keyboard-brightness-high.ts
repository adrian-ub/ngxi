import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiKeyboardBrightnessHighIcon],svg[mynaui-keyboard-brightness-high-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 17h4M3 17h3m6-9v3m6 6h3m-4.879-4.28L18.58 11M7.457 12.72L5 11"></svg:path>`,
})
export class MynauiKeyboardBrightnessHighIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
