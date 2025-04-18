import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEmojiAntennaBarsIcon],svg[arcticons-emoji-antenna-bars-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 35.562h3.854V42.5H5.5zm8.287-7.708h3.854v14.645h-3.854zm8.286-7.708h3.854v22.353h-3.854zm8.287-7.708h3.854v30.061h-3.855zM38.646 5.5H42.5v37h-3.854z"></svg:path>`,
})
export class ArcticonsEmojiAntennaBarsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
