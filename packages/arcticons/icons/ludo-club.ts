import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLudoClubIcon],svg[arcticons-ludo-club-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m9.5 20.82l2.164 7.658l3.828-1.082m1.837-8.1l-.16 5.32a2.636 2.636 0 0 0 5.27.158l.159-5.32m2.409 9.06l.768-7.92l1.782.173a3.48 3.48 0 0 1 3.13 3.801l-.097.99a3.48 3.48 0 0 1-3.8 3.13z"></svg:path><svg:rect width="5.272" height="7.957" x="33.1" y="20.13" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2.636" ry="2.636" transform="rotate(-5.471 35.736 24.108)"></svg:rect><svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect>`,
})
export class ArcticonsLudoClubIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
