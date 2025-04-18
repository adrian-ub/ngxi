import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEmojiHandbagIcon],svg[arcticons-emoji-handbag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.391 19.082c.163-8.564 1.27-13.582 8.612-13.582s8.395 5.37 8.45 13.581M42.038 42.5H5.962l1.443-23.418h33.19z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.038 42.5H5.962l1.443-23.418h33.19z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.866 21.566h6.645v6.645h-6.645zm15.101 0h6.646v6.645h-6.646z"></svg:path>`,
})
export class ArcticonsEmojiHandbagIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
