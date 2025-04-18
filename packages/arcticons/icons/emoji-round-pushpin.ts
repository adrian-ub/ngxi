import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEmojiRoundPushpinIcon],svg[arcticons-emoji-round-pushpin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.726 21.298v15.445l-1.75 5.757l-2.042-5.757V21.215"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.003 13.493c0 4.414 3.58 7.993 7.997 7.993s7.997-3.579 7.997-7.993S28.417 5.5 24 5.5s-7.997 3.579-7.997 7.993"></svg:path>`,
})
export class ArcticonsEmojiRoundPushpinIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
