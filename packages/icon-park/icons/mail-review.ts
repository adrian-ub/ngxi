import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkMailReviewIcon],svg[icon-park-mail-review-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path stroke="#000" d="M44 24V40.8182C44 42.0232 43.1046 43 42 43H6C4.89543 43 4 42.0232 4 40.8182V24L24 37L44 24Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M4 23.784L14 16.8921M44 23.784L34 16.8921"></svg:path><svg:path fill="#2F88FF" stroke="#000" d="M34 5H14V29.4146C14 30.0916 14.3424 30.7226 14.91 31.0915L22.91 36.2915C23.5728 36.7223 24.4272 36.7223 25.09 36.2915L33.09 31.0915C33.6576 30.7226 34 30.0916 34 29.4146V5Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M20 13H24"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M20 19H28"></svg:path></svg:g>`,
})
export class IconParkMailReviewIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
