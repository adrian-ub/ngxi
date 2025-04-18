import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedHederaHashgraphIcon],svg[token-branded-hedera-hashgraph-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#000" d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0-18"></svg:path><svg:path fill="#fff" d="M15.659 15.893h-1.143v-2.43H9.485v2.43H8.342v-7.88h1.143v2.372h5.03V8.013h1.144zm-6.12-3.34h5.03v-1.255H9.54z"></svg:path></svg:g>`,
})
export class TokenBrandedHederaHashgraphIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
