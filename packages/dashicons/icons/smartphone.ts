import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[dashiconsSmartphoneIcon],svg[dashicons-smartphone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2h8c.55 0 1 .45 1 1v14c0 .55-.45 1-1 1H6c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1m7 12V4H7v10zM8 5h4l-4 5z"></svg:path>`,
})
export class DashiconsSmartphoneIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
