import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkBlossomIcon],svg[icon-park-blossom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M23.2663 6.00775C31 6.45947 31.2208 14.3708 30.285 17.623C39.6432 14.6492 43.2305 18.8621 43.8544 21.3403C44.9773 27.2874 39.3312 29.0839 36.3678 29.2387C42.357 36.6725 39.4872 40.3894 37.3036 41.3186C30.5657 43.1771 26.6977 38.3761 25.6059 35.7433C22.6112 42.062 17.4954 42.4027 15.3119 41.7832C8.94827 39.9248 11.7245 33.2654 13.9081 30.1679C4.92427 28.6812 3.61412 24.2829 4.08203 22.2696C5.57934 14.8358 13.4402 16.0745 17.1835 17.623C15.6862 7.95912 20.6148 5.85288 23.2663 6.00775Z"></svg:path><svg:path stroke="#fff" d="M25 26L21 31"></svg:path><svg:path stroke="#fff" d="M19 25L25 26"></svg:path><svg:path stroke="#fff" d="M24 19L25 26"></svg:path><svg:path stroke="#fff" d="M31 24L25 26"></svg:path><svg:path stroke="#fff" d="M25 26L30 30"></svg:path></svg:g>`,
})
export class IconParkBlossomIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
