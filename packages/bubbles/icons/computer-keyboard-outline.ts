import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesComputerKeyboardOutlineIcon],svg[bubbles-computer-keyboard-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.4 7.649H7.5v-1.2a.895.895 0 0 1 .9-.9h7.2a3.903 3.903 0 0 0 3.9-3.898a1.5 1.5 0 1 0-3 0a.9.9 0 0 1-.895.898h-7.2A3.9 3.9 0 0 0 4.5 6.444v1.2h-.9A3.6 3.6 0 0 0 0 11.249v9a3.6 3.6 0 0 0 3.6 3.6h16.8a3.6 3.6 0 0 0 3.6-3.6v-9a3.6 3.6 0 0 0-3.6-3.6m-16.5 12.6a1.5 1.5 0 1 1 0-2.999a1.5 1.5 0 0 1 0 2.999m0-6a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m10.8-3a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m-5.4 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m6 9H8.7a1.5 1.5 0 1 1 0-3h6.6a1.5 1.5 0 0 1 0 3m4.8 0a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m0-6a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3"></svg:path>`,
})
export class BubblesComputerKeyboardOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
