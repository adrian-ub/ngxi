import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uimUnlockAltIcon],svg[uim-unlock-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 11a1 1 0 0 1-1-1V7a5.002 5.002 0 0 1 8.532-3.542a5.1 5.1 0 0 1 1.306 2.293a1 1 0 0 1-1.934.505l-.002-.007a3.1 3.1 0 0 0-.786-1.379A3.002 3.002 0 0 0 9 7v3a1 1 0 0 1-1 1m4 7a1 1 0 0 1-1-1v-3a1 1 0 1 1 2 0v3a1 1 0 0 1-1 1" opacity=".5"></svg:path><svg:path fill="currentColor" d="M17 9H7a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-7a3 3 0 0 0-3-3m-4 8a1 1 0 0 1-2 0v-3a1 1 0 1 1 2 0z"></svg:path>`,
})
export class UimUnlockAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
