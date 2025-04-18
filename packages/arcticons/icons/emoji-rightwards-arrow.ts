import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEmojiRightwardsArrowIcon],svg[arcticons-emoji-rightwards-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.885 34.999L42.5 24L31.885 13.001l-2.261 2.717l6.204 6.428H5.5v3.708h30.328l-6.204 6.428z"></svg:path>`,
})
export class ArcticonsEmojiRightwardsArrowIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
