import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyColorSphtxIcon],svg[cryptocurrency-color-sphtx-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:circle cx="16" cy="16" r="16" fill="#00b098"></svg:circle><svg:path fill="#fff" fill-rule="nonzero" d="M6 12.391v-.356h8.417v.356zm0-1.035V11h8.417v.356zm3.55 10.64v-8.893h.338v8.893zm.98 0v-8.893h.337v8.893zm15.232-.728l-3.798-4.013l.238-.251L26 21.016zM16.519 11l3.798 4.013l-.238.251l-3.798-4.012zm8.55 11l-3.798-4.013l.238-.252l3.798 4.013zm-9.242-10.268l3.798 4.012l-.239.252l-3.798-4.012zm5.421 4.768l.239-.252l4.275-4.516l.238.252l-4.275 4.516l-.238.252l-.454.48l-.239.252L16.52 22l-.238-.252l4.275-4.516l.238-.252zm-.454-.984L25.07 11l.238.252l-4.275 4.516l-.238.252l-.454.48l-.239.252l-4.274 4.516l-.239-.252l4.275-4.516l.238-.252l.455-.48z"></svg:path></svg:g>`,
})
export class CryptocurrencyColorSphtxIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
