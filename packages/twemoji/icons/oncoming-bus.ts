import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiOncomingBusIcon],svg[twemoji-oncoming-bus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#292F33" d="M11 34a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2zm20 0a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2z"></svg:path><svg:path fill="#99AAB5" d="M3 17a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1zm33 0a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1z"></svg:path><svg:path fill="#99AAB5" d="M35 11a1 1 0 0 1-1 1H2a1 1 0 0 1 0-2h32a1 1 0 0 1 1 1m0 4a1 1 0 0 1-1 1H2a1 1 0 1 1 0-2h32a1 1 0 0 1 1 1"></svg:path><svg:path fill="#CCD6DD" d="M24 2a2 2 0 0 1-2 2h-8a2 2 0 0 1 0-4h8a2 2 0 0 1 2 2"></svg:path><svg:path fill="#CCD6DD" d="M28 2H8a4 4 0 0 0-4 4v26h28V6a4 4 0 0 0-4-4"></svg:path><svg:path fill="#FFCC4D" d="M4 16h28v16H4z"></svg:path><svg:path fill="#66757F" d="M33 32a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h28a1 1 0 0 1 1 1zm-1-15a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-7a3 3 0 0 1 3-3h22a3 3 0 0 1 3 3z"></svg:path><svg:path fill="#88C9F9" d="M30 16a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2z"></svg:path><svg:path fill="#FFAC33" d="M4 25h28v5H4z"></svg:path><svg:path fill="#FFF" d="M6 25h6v3H6zm18 0h6v3h-6z"></svg:path><svg:path fill="#DD2E44" d="M4 25h2v3H4zm26 0h2v3h-2z"></svg:path><svg:path fill="#66757F" d="M14 25h8v3h-8z"></svg:path><svg:path fill="#292F33" d="M22 3.5A1.5 1.5 0 0 1 20.5 5h-5a1.5 1.5 0 1 1 0-3h5A1.5 1.5 0 0 1 22 3.5"></svg:path>`,
})
export class TwemojiOncomingBusIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
