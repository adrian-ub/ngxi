import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsArrowRightSmallOutlineIcon],svg[teenyicons-arrow-right-small-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.146 9.146l-.353.354l.707.707l.354-.353zM10.5 7.5l.354.354l.353-.354l-.353-.354zM8.854 5.146L8.5 4.793l-.707.707l.353.354zm0 4.708l2-2l-.708-.708l-2 2zm2-2.708l-2-2l-.708.708l2 2zM10.5 7H4v1h6.5z"></svg:path>`,
})
export class TeenyiconsArrowRightSmallOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
