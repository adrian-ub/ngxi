import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCountdownIcon],svg[arcticons-countdown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 2.5c11.874 0 21.5 9.626 21.5 21.5S35.874 45.5 24 45.5S2.5 35.874 2.5 24m18 7h7m-7-12.094L24 17m0 0v14"></svg:path><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M2.5 24q0-.756.052-1.5"></svg:path><svg:path stroke-dasharray="0 0 2.797 2.797" d="M2.925 19.728c1.794-8.902 9.087-15.812 18.183-17.035"></svg:path><svg:path d="M22.5 2.552Q23.244 2.5 24 2.5"></svg:path></svg:g>`,
})
export class ArcticonsCountdownIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
