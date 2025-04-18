import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[dashiconsFormatVideoIcon],svg[dashicons-format-video-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 1h16c.55 0 1 .45 1 1v16l-18-.02V2c0-.55.45-1 1-1m4 1L4 5h1l2-3zm4 0H9L7 5h1zm3 0h-1l-2 3h1zm3 0h-1l-2 3h1zm1 14V6H3v10zM8 7l6 4l-6 4z"></svg:path>`,
})
export class DashiconsFormatVideoIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
