import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsDfndrSecurityIcon],svg[arcticons-dfndr-security-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 42.5c12.491-7.566 18.38-20.278 18.38-32.157c0 0-6.053-4.843-18.38-4.843S5.62 10.342 5.62 10.342c0 11.88 5.889 24.592 18.38 32.158"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.59 38.568A6.66 6.66 0 0 1 24 35.802a6.5 6.5 0 0 1 2.253.391a6.6 6.6 0 0 1 3.158 2.375M8.402 24.386c4.183-3.63 9.634-5.802 15.598-5.802c2.712 0 5.33.445 7.759 1.296M13.057 32.617A14.65 14.65 0 0 1 24 27.747c1.687 0 3.32.283 4.83.809m2.925-8.68l-5.498 16.322"></svg:path>`,
})
export class ArcticonsDfndrSecurityIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
