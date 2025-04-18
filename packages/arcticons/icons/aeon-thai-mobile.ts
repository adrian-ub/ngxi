import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAeonThaiMobileIcon],svg[arcticons-aeon-thai-mobile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M26.463 23.994c-.003.622-2.947 1.125-6.577 1.125s-6.575-.504-6.575-1.126h0c.003-.622 2.946-1.126 6.575-1.126c3.632 0 6.576.504 6.577 1.127"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m9.5 27.669l5.642-7.338h5.542M30.451 24c0 2.214-2.092 4.008-4.673 4.008h0c-2.582 0-4.674-1.794-4.674-4.008h0c0-2.214 2.092-4.008 4.673-4.008h0c2.581 0 4.674 1.794 4.674 4.007z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.684 27.669h-4.347v-7.338m15.983 7.318v-7.298l6.18 7.298v-7.298"></svg:path><svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect>`,
})
export class ArcticonsAeonThaiMobileIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
