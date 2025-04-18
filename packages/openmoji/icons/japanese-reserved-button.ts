import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiJapaneseReservedButtonIcon],svg[openmoji-japanese-reserved-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="48.984" height="48.984" x="11.168" y="11.09" fill="#d0cfce" rx="1.699"></svg:rect><svg:g fill="none" stroke="#000" stroke-width="2"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M37.932 51.824V36.539h12.14v15.285"></svg:path><svg:path stroke-miterlimit="5" d="M37.932 41.433h12.14"></svg:path><svg:path stroke-linecap="round" stroke-miterlimit="5" d="M23.834 30.254h8.898m-8.453 11.313l8.475-2.708"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M50.072 26.257v3.997h-12.14V19.615m-9.456 0v31.509h-7.229"></svg:path><svg:path stroke-miterlimit="5" d="M37.932 46.736h12.14"></svg:path><svg:path stroke-linecap="round" stroke-miterlimit="5" d="m37.932 25.533l10.056-3.013"></svg:path><svg:rect width="48.984" height="48.984" x="11.168" y="11.09" stroke-miterlimit="10" rx="1.699"></svg:rect></svg:g>`,
})
export class OpenmojiJapaneseReservedButtonIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
