import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEmojiCoffinIcon],svg[arcticons-emoji-coffin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.352 42.5h5.296c.763 0 1.438-.494 1.67-1.222l7.218-22.66a1.76 1.76 0 0 0-.192-1.479L28.445 6.312a1.75 1.75 0 0 0-1.477-.812h-5.936c-.599 0-1.156.306-1.478.812l-6.898 10.827c-.28.44-.35.982-.192 1.48l7.218 22.659a1.75 1.75 0 0 0 1.67 1.222"></svg:path>`,
})
export class ArcticonsEmojiCoffinIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
