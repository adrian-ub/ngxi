import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedApechainIcon],svg[token-branded-apechain-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#tokenBrandedApechain0)"><svg:path stroke="#0054FA" stroke-width="2.256" d="M20.784 5.027H3.22a.16.16 0 0 0-.161.161v13.395c0 .09.072.161.161.161h17.564a.16.16 0 0 0 .161-.16V5.187a.16.16 0 0 0-.16-.16Z"></svg:path><svg:path fill="#0054FA" d="M7.191 8.18h1.424l.917 7.632H8.326l-.134-1.66h-.64l-.134 1.66H6.274zm.568 3.394l-.124 1.567h.474l-.134-1.567l-.093-1.32h-.03zm4.302 4.238h-1.227V8.181h1.609c.877 0 1.413.515 1.413 1.444v1.877c0 .917-.536 1.433-1.413 1.433h-.382zm.01-3.795h.269c.206 0 .289-.185.289-.515V9.625c0-.34-.083-.526-.29-.526h-.267zm3.199 3.795V8.181h2.392v1.01h-1.165v2.259h1.041v1.01h-1.041v2.342h1.165v1.01z"></svg:path></svg:g><svg:defs><svg:clippath id="tokenBrandedApechain0"><svg:path fill="#fff" d="M3 5h18v13.761H3z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class TokenBrandedApechainIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
