import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedTxauIcon],svg[token-branded-txau-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#E3BA4F" fill-rule="evenodd" d="M20.47 12a8.47 8.47 0 1 1-16.94 0a8.47 8.47 0 0 1 16.94 0m.53 0a9 9 0 1 1-18 0a9 9 0 0 1 18 0m-8.47 4.765v-1.06h-1.06c-1.27 0-1.588-1.058-1.588-1.587V9.353c0-.847 1.06-1.059 1.588-1.059h1.06c1.27 0 1.588 1.059 1.588 1.588v.53h1.588v-1.06c0-1.693-2.118-2.117-3.176-2.117h-1.06c-2.54 0-3.176 1.414-3.176 2.118v4.765c0 2.117 2.118 2.647 3.176 2.647zM15.706 12H12v1.059h2.118v3.706h1.588z" clip-rule="evenodd"></svg:path>`,
})
export class TokenBrandedTxauIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
