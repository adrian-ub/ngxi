import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneMonotoneDesktopComputerIcon],svg[emojione-monotone-desktop-computer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M58.25 2H5.75C3.875 2 2 3.875 2 5.75v42.188c0 1.875 1.875 3.75 3.75 3.75H24.5v3.75c0 2.604-3.378 3.75-7.5 3.75V62h30v-2.813c-4.123 0-7.5-1.146-7.5-3.75v-3.75h18.75c1.875 0 3.75-1.875 3.75-3.75V5.75C62 3.875 60.125 2 58.25 2M60 47.938c0 .769-.982 1.75-1.75 1.75H5.75c-.769 0-1.75-.981-1.75-1.75v-3.75h56z"></svg:path><svg:circle cx="32" cy="47.938" r=".938" fill="currentColor"></svg:circle>`,
})
export class EmojioneMonotoneDesktopComputerIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
