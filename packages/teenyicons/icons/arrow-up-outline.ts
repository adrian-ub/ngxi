import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsArrowUpOutlineIcon],svg[teenyicons-arrow-up-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7.5 1.5l.354-.354L7.5.793l-.354.353zm-.354.354l4 4l.708-.708l-4-4zm0-.708l-4 4l.708.708l4-4zM7 1.5V14h1V1.5z"></svg:path>`,
})
export class TeenyiconsArrowUpOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
