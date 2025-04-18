import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageKeyboardFillIcon],svg[mage-keyboard-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 5.81H4A2.11 2.11 0 0 0 2 8v8a2.11 2.11 0 0 0 2 2.19h16A2.11 2.11 0 0 0 22 16V8a2.11 2.11 0 0 0-2-2.19m-6.53 3.36h1.05a1 1 0 0 1 0 2h-1.05a1 1 0 0 1 0-2m-4 0h1.06a1 1 0 1 1 0 2H9.47a1 1 0 0 1 0-2m-2.88 5.61H5.53a1 1 0 0 1 0-2h1.06a1 1 0 1 1 0 2m0-3.61H5.53a1 1 0 0 1 0-2h1.06a1 1 0 1 1 0 2m8 3.61H9.3a1 1 0 0 1 0-2h5.29a1 1 0 1 1 0 2m3.81 0h-1.06a1 1 0 0 1 0-2h1.06a1 1 0 1 1 0 2m0-3.61h-1.06a1 1 0 0 1 0-2h1.06a1 1 0 1 1 0 2"></svg:path>`,
})
export class MageKeyboardFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
