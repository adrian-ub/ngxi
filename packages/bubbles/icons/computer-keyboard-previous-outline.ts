import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesComputerKeyboardPreviousOutlineIcon],svg[bubbles-computer-keyboard-previous-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6" d="M5.8 8h9.6m-5.6 4l-4-4l4-4M1 4v8"></svg:path>`,
})
export class BubblesComputerKeyboardPreviousOutlineIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
