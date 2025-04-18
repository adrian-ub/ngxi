import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiPoliceCarIcon],svg[twemoji-police-car-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#E1E8ED" d="M32 22s-2-8-5-8H16c-3 0-7 7-7 7s-8 1-8 5v2c0 .09.021.175.026.263A1.99 1.99 0 0 0 0 30a2 2 0 0 0 2 2h30a4 4 0 0 0 4-4v-2a4 4 0 0 0-4-4"></svg:path><svg:path fill="#292F33" d="M1 26v2c0 .09.021.175.026.263A1.99 1.99 0 0 0 0 30a2 2 0 0 0 2 2h30a4 4 0 0 0 4-4v-2c0-.348-.059-.679-.142-1H1.201A2.8 2.8 0 0 0 1 26"></svg:path><svg:path fill="#66757F" d="M15.91 32c.055-.326.09-.658.09-1a6 6 0 0 0-12 0c0 .342.035.674.09 1zm17 0c.055-.326.09-.658.09-1a6 6 0 0 0-12 0c0 .342.035.674.09 1z"></svg:path><svg:circle cx="10" cy="31" r="4" fill="#292F33"></svg:circle><svg:circle cx="10" cy="31" r="2" fill="#E1E8ED"></svg:circle><svg:circle cx="27" cy="31" r="4" fill="#292F33"></svg:circle><svg:circle cx="27" cy="31" r="2" fill="#E1E8ED"></svg:circle><svg:path fill="#DD2E44" d="M21 13a1 1 0 0 1-1 1h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 1 1"></svg:path><svg:path fill="#55ACEE" d="M22 13a1 1 0 0 1-1 1h-2a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1m1 8h7s-2-5-3-5h-4zm-2-5h-5c-2 0-5 5-5 5h10z"></svg:path>`,
})
export class TwemojiPoliceCarIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
