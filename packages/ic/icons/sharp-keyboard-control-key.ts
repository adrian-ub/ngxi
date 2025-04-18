import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpKeyboardControlKeyIcon],svg[ic-sharp-keyboard-control-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5 12l1.41 1.41L12 7.83l5.59 5.58L19 12l-7-7z"></svg:path>`,
})
export class IcSharpKeyboardControlKeyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
