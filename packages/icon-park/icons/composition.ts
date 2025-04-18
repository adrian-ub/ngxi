import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkCompositionIcon],svg[icon-park-composition-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" fill-rule="evenodd" d="M39.8281 21.7859L21.9686 39.6454C18.5544 43.0597 12.9373 42.9783 9.42255 39.4636C5.90784 35.9489 5.82643 30.3318 9.24073 26.9175L27.1002 9.05798" clip-rule="evenodd"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-width="4" d="M39.8281 21.7859L21.9686 39.6454C18.5544 43.0597 12.9373 42.9783 9.42255 39.4636C5.90784 35.9489 5.82643 30.3318 9.24073 26.9175L27.1002 9.05798"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-width="4" d="M8.73438 27.4238L34.8784 26.7356"></svg:path><svg:path fill="#fff" d="M29.393 20.9069C30.1741 20.1258 30.1741 18.8595 29.393 18.0785C28.612 17.2974 27.3457 17.2974 26.5646 18.0785C25.7836 18.8595 25.7836 20.1258 26.5646 20.9069C27.3457 21.6879 28.612 21.6879 29.393 20.9069Z"></svg:path><svg:path fill="#fff" d="M23.7358 23.7355C24.5169 22.9545 24.5169 21.6881 23.7358 20.9071C22.9548 20.126 21.6884 20.126 20.9074 20.9071C20.1263 21.6881 20.1263 22.9545 20.9074 23.7355C21.6884 24.5166 22.9548 24.5166 23.7358 23.7355Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-width="4" d="M23.5645 5.52246L43.3634 25.3215"></svg:path></svg:g>`,
})
export class IconParkCompositionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
