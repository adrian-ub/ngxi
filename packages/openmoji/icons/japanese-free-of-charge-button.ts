import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiJapaneseFreeOfChargeButtonIcon],svg[openmoji-japanese-free-of-charge-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="48.984" height="48.984" x="11.591" y="11.617" fill="#d0cfce" rx="1.699"></svg:rect><svg:g fill="none" stroke="#000" stroke-width="2"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M30.594 17.728s-2.77 7.54-8.463 10.309"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M50.518 23.498H27.355v18.54m-5.224.384h28.387M22.131 32.96h28.387"></svg:path><svg:path stroke-linejoin="round" d="M33.595 23.073v19.349m6.23-19.349v19.349m6.154-19.349v19.349"></svg:path><svg:path stroke-linecap="round" stroke-miterlimit="10" d="m26.043 46.926l-2.304 3.838m9.296-3.09l-.398 4.459m8.003-4.462l.313 4.465m6.952-5.012l2.271 3.858"></svg:path><svg:rect width="48.984" height="48.984" x="11.591" y="11.617" stroke-miterlimit="10" rx="1.699"></svg:rect></svg:g>`,
})
export class OpenmojiJapaneseFreeOfChargeButtonIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
