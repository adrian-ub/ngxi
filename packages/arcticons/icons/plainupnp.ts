import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPlainupnpIcon],svg[arcticons-plainupnp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m25.17 27.971l1.52-1.504a1.77 1.77 0 0 0 .002-2.505l-.002-.002h0a1.77 1.77 0 0 0-2.505-.012l-.013.012l-1.515 1.504a10.81 10.81 0 0 0-12.634 0l-1.46-1.481a1.783 1.783 0 0 0-2.52-.003l-.003.003h0a1.777 1.777 0 0 0 0 2.506l1.516 1.493A10.83 10.83 0 0 0 5.5 34.31v5.175c0 .631.511 1.142 1.142 1.142h19.441a1.14 1.14 0 0 0 1.114-1.142V34.31a10.8 10.8 0 0 0-2.027-6.339M11.8 36.043a2.005 2.005 0 1 1 2-2.011v.011a2 2 0 0 1-2 2h-.011zm9.147 0a2.005 2.005 0 1 1 1.989-2.022v.022a2 2 0 0 1-2 2z"></svg:path><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M15.522 15.393c10.47 0 18.958 8.488 18.958 18.958"></svg:path><svg:path d="M15.522 7.373c14.9 0 26.978 12.078 26.978 26.978"></svg:path></svg:g>`,
})
export class ArcticonsPlainupnpIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
