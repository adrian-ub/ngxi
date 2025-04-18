import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsElevenIcon],svg[arcticons-eleven-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.75 4.5c-8.89 0-12.56 8.9-10.08 17.08c2.71 8.94 13.07 22 16.33 21.92s13.62-13 16.33-21.92C42.81 13.4 39.14 4.5 30.25 4.5Zm1.33 6.5"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.17 14.44v-2.86h10.4v2.86m0 0v10.11m-10.4-10.11V22"></svg:path><svg:circle cx="17.29" cy="22" r="2.88" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="27.7" cy="24.55" r="2.88" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.17 14.44h10.4"></svg:path>`,
})
export class ArcticonsElevenIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
