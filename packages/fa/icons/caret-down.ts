import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faCaretDownIcon],svg[fa-caret-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024 448q0 26-19 45L557 941q-19 19-45 19t-45-19L19 493Q0 474 0 448t19-45t45-19h896q26 0 45 19t19 45"></svg:path>`,
})
export class FaCaretDownIcon {
  readonly viewBox = input("0 0 1024 1280")
  readonly width = input("0.8em")
  readonly height = input("1em")
}
