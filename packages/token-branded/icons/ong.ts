import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedOngIcon],svg[token-branded-ong-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#329AFA" d="M3 12.816V3l14.625 15.469a10.3 10.3 0 0 1-4.399 2.402c-.995.225-3.965.376-6.682-1.575C3.827 17.355 3 14.25 3 12.82zm18-1.632V21L6.375 5.531a10.3 10.3 0 0 1 4.399-2.402c.995-.225 3.965-.377 6.682 1.575C20.173 6.645 21 9.75 21 11.18z"></svg:path>`,
})
export class TokenBrandedOngIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
