import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oiVideoIcon],svg[oi-video-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M.5 1c-.28 0-.5.23-.5.5v4c0 .28.23.5.5.5h5c.28 0 .5-.22.5-.5V4l1 1h1V2H7L6 3V1.5c0-.28-.22-.5-.5-.5z"></svg:path>`,
})
export class OiVideoIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
