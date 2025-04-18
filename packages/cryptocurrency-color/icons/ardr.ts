import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyColorArdrIcon],svg[cryptocurrency-color-ardr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:circle cx="16" cy="16" r="16" fill="#3C87C7"></svg:circle><svg:path fill="#FFF" d="m15.883 17.19l1.769 2.312L12.5 23zM16 6l2.727 4.474L11.455 23H6zm0 9.842l3.636-2.684L26 23h-4.545z"></svg:path></svg:g>`,
})
export class CryptocurrencyColorArdrIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
