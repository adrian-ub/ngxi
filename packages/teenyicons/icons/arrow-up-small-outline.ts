import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsArrowUpSmallOutlineIcon],svg[teenyicons-arrow-up-small-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5.146 6.146l-.353.354l.707.707l.354-.353zM7.5 4.5l.354-.354l-.354-.353l-.354.353zm1.646 2.354l.354.353l.707-.707l-.353-.354zm-3.292 0l2-2l-.708-.708l-2 2zm1.292-2l2 2l.708-.708l-2-2zM7 4.5V11h1V4.5z"></svg:path>`,
})
export class TeenyiconsArrowUpSmallOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
