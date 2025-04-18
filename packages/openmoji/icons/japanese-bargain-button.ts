import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiJapaneseBargainButtonIcon],svg[openmoji-japanese-bargain-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="48.984" height="48.984" x="11.792" y="11.974" fill="#d0cfce" rx="1.699"></svg:rect><svg:g fill="none" stroke="#000" stroke-width="2"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M34.293 24.315h14.135v10.826H34.047V24.315z"></svg:path><svg:path stroke-miterlimit="10" d="M34.047 29.728h14.381"></svg:path><svg:path stroke-linecap="round" stroke-miterlimit="10" d="M31.693 40.464h19.091m-19.091 5.323h19.091M34.715 51.11h3.533M21.245 36.317l7.476-3.176m-7.795-4.495l7.476-3.176"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M42.521 52.493h3.533V40.696"></svg:path><svg:path stroke-linecap="round" stroke-miterlimit="10" d="M25.465 34.525v17.968"></svg:path><svg:rect width="48.984" height="48.984" x="11.792" y="11.974" stroke-miterlimit="10" rx="1.699"></svg:rect></svg:g>`,
})
export class OpenmojiJapaneseBargainButtonIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
