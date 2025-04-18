import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiJapaneseNotFreeOfChargeButtonIcon],svg[openmoji-japanese-not-free-of-charge-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="48.984" height="48.984" x="11.472" y="11.042" fill="#d0cfce" rx="1.699"></svg:rect><svg:g fill="none" stroke="#000" stroke-width="2"><svg:path stroke-linecap="round" stroke-miterlimit="5" d="M21.321 25.123h29.975m-16.863-5.126a46 46 0 0 1-5.197 10.875a25.4 25.4 0 0 1-8.562 8.415m19.63 12.017h5.89a.6.6 0 0 0 .661-.507V32.028a.6.6 0 0 0-.66-.507H30.606M29.85 37.9h17.005m-17.63-5.817v19.005"></svg:path><svg:path stroke-miterlimit="5" d="M29.225 43.228h17.63"></svg:path><svg:rect width="48.984" height="48.984" x="11.472" y="11.042" stroke-miterlimit="10" rx="1.699"></svg:rect></svg:g>`,
})
export class OpenmojiJapaneseNotFreeOfChargeButtonIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
