import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiDesktopComputerIcon],svg[twemoji-desktop-computer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#CCD6DD" d="M36 22a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4z"></svg:path><svg:path fill="#5DADEC" d="M4 4h28v18H4z"></svg:path><svg:path fill="#CCD6DD" d="M13 26h10v6H13z"></svg:path><svg:path fill="#9AAAB4" d="M13 26h10v2H13z"></svg:path><svg:path fill="#E1E8ED" d="M36 33a3 3 0 0 0-3-3H3a3 3 0 1 0 0 6h30a3 3 0 0 0 3-3"></svg:path><svg:path fill="#F5F8FA" d="M3 32h2v2H3zm4 0h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2zm4 0h2v2h-2zm4 0h2v2h-2zm4 0h2v2h-2zm4 0h2v2h-2z"></svg:path>`,
})
export class TwemojiDesktopComputerIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
