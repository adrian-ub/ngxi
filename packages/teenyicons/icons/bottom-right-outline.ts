import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsBottomRightOutlineIcon],svg[teenyicons-bottom-right-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.5 13.5v.5a.5.5 0 0 0 .5-.5zm0-.5H8v1h5.5zm.5.5V8h-1v5.5zm-.146-.354l-12-12l-.708.708l12 12z"></svg:path>`,
})
export class TeenyiconsBottomRightOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
