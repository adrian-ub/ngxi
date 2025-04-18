import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsArrowLeftSmallOutlineIcon],svg[teenyicons-arrow-left-small-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6.146 9.854l.354.353l.707-.707l-.353-.354zM4.5 7.5l-.354-.354l-.353.354l.353.354zm2.354-1.646l.353-.354l-.707-.707l-.354.353zm0 3.292l-2-2l-.708.708l2 2zm-2-1.292l2-2l-.708-.708l-2 2zM4.5 8H11V7H4.5z"></svg:path>`,
})
export class TeenyiconsArrowLeftSmallOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
