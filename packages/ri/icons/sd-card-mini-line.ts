import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riSdCardMiniLineIcon],svg[ri-sd-card-mini-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 4v5.793a2.5 2.5 0 0 1-.73 1.765L6 12.833V20h12V4zM7 2h12a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-8.58a1 1 0 0 1 .292-.707l1.562-1.567A.5.5 0 0 0 6 9.793V3a1 1 0 0 1 1-1m8 3h2v4h-2zm-3 0h2v4h-2zM9 5h2v4H9z"></svg:path>`,
})
export class RiSdCardMiniLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
