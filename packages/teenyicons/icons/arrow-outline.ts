import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsArrowOutlineIcon],svg[teenyicons-arrow-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M.5.5V0a.5.5 0 0 0-.5.5zm0 4H0a.5.5 0 0 0 .854.354zm4-4l.354.354A.5.5 0 0 0 4.5 0zM2.146 2.854l12 12l.708-.708l-12-12zM0 .5v4h1v-4zm.854 4.354l4-4l-.708-.708l-4 4zM4.5 0h-4v1h4z"></svg:path>`,
})
export class TeenyiconsArrowOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
