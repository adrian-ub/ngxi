import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineMdBuyMeACoffeeTwotoneIcon],svg[line-md-buy-me-a-coffee-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="lineMdBuyMeACoffeeTwotone0"><svg:path fill="#fff" d="M5 6C5 4 7 6 11.5 6C16 6 19 4 19 6L19 7C19 8.5 17 9 12.5 9C8 9 5 9 5 7L5 6Z"></svg:path></svg:mask><svg:mask id="lineMdBuyMeACoffeeTwotone1"><svg:path fill="#fff" d="M10.125 18.15C10.04 17.29 9.4 11.98 9.4 11.98C9.4 11.98 11.34 12.31 12.5 11.73C13.66 11.16 14.98 11 14.98 11C14.98 11 14.4 17.96 14.35 18.46C14.3 18.96 13.45 19.3 12.95 19.3L11.23 19.3C10.73 19.3 10.21 19 10.125 18.15Z"></svg:path></svg:mask></svg:defs><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="32" stroke-dashoffset="32" d="M7.5 10.5c0 0 0.83 6.93 1 8.5c0.17 1.57 1.5 2 2.5 2l2 0c1.5 0 2.88 -1.14 3 -2c0.13 -0.86 1 -12 1 -12"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="32;0"></svg:animate></svg:path><svg:path stroke-dasharray="12" stroke-dashoffset="12" d="M8 4c1.1 -0.57 2 -1 4 -1c2 0 4.5 0.5 4.5 3"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.2s" values="12;0"></svg:animate></svg:path></svg:g><svg:rect width="16" height="5" x="20" y="4" fill="currentColor" mask="url(#lineMdBuyMeACoffeeTwotone0)"><svg:animate fill="freeze" attributeName="x" begin="0.4s" dur="0.4s" values="20;4"></svg:animate></svg:rect><svg:rect width="8" height="10" x="8" y="20" fill="currentColor" fill-opacity=".3" mask="url(#lineMdBuyMeACoffeeTwotone1)"><svg:animate fill="freeze" attributeName="y" begin="1s" dur="0.4s" values="20;10"></svg:animate></svg:rect>`,
})
export class LineMdBuyMeACoffeeTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
