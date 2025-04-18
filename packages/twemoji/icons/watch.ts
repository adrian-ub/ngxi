import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiWatchIcon],svg[twemoji-watch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#31373D" d="M25 32a4 4 0 0 1-4 4h-6a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4z"></svg:path><svg:path fill="#99AAB5" d="M32 18a2 2 0 0 0-2-2h-1a2 2 0 0 0 0 4h1a2 2 0 0 0 2-2"></svg:path><svg:path fill="#CCD6DD" d="M6 18c0-6.627 5.373-12 12-12c6.628 0 12 5.373 12 12s-5.372 12-12 12c-6.627 0-12-5.373-12-12"></svg:path><svg:path fill="#F5F8FA" d="M10 18a8 8 0 1 1 16 0a8 8 0 0 1-16 0"></svg:path><svg:path fill="#66757F" d="M23 22a1 1 0 0 1-.514-.143l-5-3A1 1 0 0 1 17 18v-7a1 1 0 0 1 2 0v6.434l4.516 2.708A1 1 0 0 1 23 22"></svg:path>`,
})
export class TwemojiWatchIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
