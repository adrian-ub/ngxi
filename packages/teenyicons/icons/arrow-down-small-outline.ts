import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsArrowDownSmallOutlineIcon],svg[teenyicons-arrow-down-small-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9.854 8.854l.353-.354l-.707-.707l-.354.353zM7.5 10.5l-.354.354l.354.353l.354-.353zM5.854 8.146L5.5 7.793l-.707.707l.353.354zm3.292 0l-2 2l.708.708l2-2zm-1.292 2l-2-2l-.708.708l2 2zM8 10.5V4H7v6.5z"></svg:path>`,
})
export class TeenyiconsArrowDownSmallOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
