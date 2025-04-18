import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsArrowRightCircleOutlineIcon],svg[teenyicons-arrow-right-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.146 9.146l-.353.354l.707.707l.354-.353zM10.5 7.5l.354.354l.353-.354l-.353-.354zM8.854 5.146L8.5 4.793l-.707.707l.353.354zm0 4.708l2-2l-.708-.708l-2 2zm2-2.708l-2-2l-.708.708l2 2zM10.5 7H4v1h6.5zm-3 7A6.5 6.5 0 0 1 1 7.5H0A7.5 7.5 0 0 0 7.5 15zM14 7.5A6.5 6.5 0 0 1 7.5 14v1A7.5 7.5 0 0 0 15 7.5zM7.5 1A6.5 6.5 0 0 1 14 7.5h1A7.5 7.5 0 0 0 7.5 0zm0-1A7.5 7.5 0 0 0 0 7.5h1A6.5 6.5 0 0 1 7.5 1z"></svg:path>`,
})
export class TeenyiconsArrowRightCircleOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
