import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenHederaHashgraphIcon],svg[token-hedera-hashgraph-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.569 12.553h-5.03v-1.255h5.03z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M7 4.517a9 9 0 1 1 10 14.966A9 9 0 0 1 7 4.517m7.515 11.376h1.143v-7.88h-1.142v2.371H9.484V8.013H8.341v7.88h1.143v-2.43h5.031z" clip-rule="evenodd"></svg:path>`,
})
export class TokenHederaHashgraphIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
