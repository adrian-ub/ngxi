import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[humbleiconsGiftIcon],svg[humbleicons-gift-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M12 9V6a3 3 0 1 0-3 3zm0 0V7a2 2 0 1 1 2 2zm-7 4v7a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-7m-7-3v11m8-8v-3a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v3z"></svg:path>`,
})
export class HumbleiconsGiftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
