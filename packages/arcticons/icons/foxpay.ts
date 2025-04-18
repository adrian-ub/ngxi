import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFoxpayIcon],svg[arcticons-foxpay-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.996 42.5c13.714-8 17.428-14.571 16.285-31.429c-14-7.428-18.571-7.428-32.571 0C6.567 27.643 10.567 34.5 23.995 42.5"></svg:path><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M10.853 12.786c-1.987 8.546 2.171 16.407 7.428 23.428c-2.546-8.71 2.133-14.165 8-18.285c-4.882 1.06-9.782 1.052-15.428-5.143"></svg:path><svg:path d="M26.281 17.929c-4.305-.11-8.21-1.622-11.153-6.497c-.483 1.07-1.046 1.873-1.138 4.246m10.006 23.965c.064-5.108 2.443-9.7 7.428-13.714c4.85-3.16 6.327-7.5 5.714-12.572c-2.34 3.613-6.582 5.597-10.285 7.429s-10.78 10.036-2.857 18.857"></svg:path></svg:g>`,
})
export class ArcticonsFoxpayIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
