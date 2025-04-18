import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMyHomeCreditIcon],svg[arcticons-my-home-credit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 9.375c-10.77 0-19.5 8.73-19.5 19.5a19.5 19.5 0 0 0 2.662 9.75h8.728a12.7 12.7 0 0 1-4.588-9.75c0-7.013 5.685-12.698 12.698-12.698h0c7.013 0 12.698 5.685 12.698 12.698h0a12.7 12.7 0 0 1-4.588 9.75h8.728a19.5 19.5 0 0 0 2.662-9.75c0-10.77-8.73-19.5-19.5-19.5"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.65 31.596a9.75 9.75 0 0 0 4.474 5.723a9.75 9.75 0 0 0 9.75 0a9.75 9.75 0 0 0 4.475-5.723z"></svg:path>`,
})
export class ArcticonsMyHomeCreditIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
