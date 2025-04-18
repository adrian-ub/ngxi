import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedTenetIcon],svg[token-branded-tenet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#261C37" d="M14.502 18.715a2.891 2.891 0 0 1-5.007 0L3.38 8.122a2.858 2.858 0 0 1 2.503-4.281h12.23c2.211 0 3.6 2.374 2.504 4.276L14.502 18.72zM13.095 6.226a1.211 1.211 0 0 0-2.194 0L8.19 11.453a1.24 1.24 0 0 0 0 1.09l2.711 5.222a1.208 1.208 0 0 0 2.194 0l2.712-5.221a1.24 1.24 0 0 0 0-1.091l-2.712-5.221z"></svg:path>`,
})
export class TokenBrandedTenetIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
