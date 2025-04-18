import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsNoVideoIcon],svg[flat-color-icons-no-video-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#4CAF50" d="M8 12h22c2.2 0 4 1.8 4 4v16c0 2.2-1.8 4-4 4H8c-2.2 0-4-1.8-4-4V16c0-2.2 1.8-4 4-4"></svg:path><svg:path fill="#388E3C" d="m44 35l-10-6V19l10-6z"></svg:path><svg:path fill="none" stroke="#212121" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="4" d="m5 5l38 38"></svg:path>`,
})
export class FlatColorIconsNoVideoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
