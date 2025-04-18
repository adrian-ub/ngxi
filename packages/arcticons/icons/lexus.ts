import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLexusIcon],svg[arcticons-lexus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.928 10.856C38.463 13.142 43 18.168 43 24c0 2.201-.646 4.288-1.803 6.155H19.59c-1.763 0-2.815-1.966-1.836-3.433l11.14-16.696v0A24.7 24.7 0 0 0 24 9.54C13.507 9.541 5 16.015 5 24s8.507 14.459 19 14.459c6.195 0 11.697-2.257 15.166-5.748"></svg:path>`,
})
export class ArcticonsLexusIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
