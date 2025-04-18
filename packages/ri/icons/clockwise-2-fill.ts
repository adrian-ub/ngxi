import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riClockwise2FillIcon],svg[ri-clockwise-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 4V1l5 4l-5 4V6H8a3 3 0 0 0-3 3v4H3V9a5 5 0 0 1 5-5zm-1 7a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H10a1 1 0 0 1-1-1z"></svg:path>`,
})
export class RiClockwise2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
