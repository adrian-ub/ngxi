import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsJapaneseTvIcon],svg[arcticons-japanese-tv-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="39" height="23.582" x="4.5" y="16.185" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="5.162" ry="5.162"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m26.226 16.185l3.023-5.996"></svg:path><svg:circle cx="29.728" cy="9.234" r="1" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m21.774 16.185l-3.023-5.996"></svg:path><svg:circle cx="18.272" cy="9.234" r="1" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.524 24.162h6.306m-7.651 3.14h8.996m-4.498 0c0 3.014-.296 4.017-2.357 5.52m10.739-8.66v8.313c2.41 0 6.112-1.976 7.247-4.156m3.547-4.157V31.2c0 .87.477 1.388 3.519 1.388c1.822 0 3.168-.336 3.168-.336"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M37.853 25.998c-2.776 1.164-6 1.837-6 1.837m5.96-4.244l.641 1.051m.726-1.602l.641 1.051"></svg:path>`,
})
export class ArcticonsJapaneseTvIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
