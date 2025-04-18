import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBadreadsIcon],svg[arcticons-badreads-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="5.291" height="22.194" x="20.204" y="12.851" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx=".786"></svg:rect><svg:rect width="5.291" height="22.194" x="25.495" y="12.851" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx=".786"></svg:rect><svg:rect width="4.556" height="21.055" x="32.734" y="13.99" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx=".786" transform="rotate(-11.104 35.012 24.517)"></svg:rect><svg:rect width="4.262" height="18.96" x="39.238" y="16.084" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx=".786"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.495 25.794h5.291m-5.291 4.464h5.291m-10.582.579h5.291m-5.291-2.48h5.291m-5.291-9.535h5.291m-5.291-2.481h5.291m15.874 13.192v-7.937"></svg:path><svg:rect width="4.262" height="18.96" x="14.251" y="16.084" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx=".786" transform="rotate(10.135 16.382 25.564)"></svg:rect><svg:rect width="4.262" height="17.788" x="7.779" y="17.248" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx=".786" transform="rotate(24.822 9.91 26.141)"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m15.684 29.471l1.397-7.813"></svg:path>`,
})
export class ArcticonsBadreadsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
