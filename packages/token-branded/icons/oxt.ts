import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedOxtIcon],svg[token-branded-oxt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#5F45BA"><svg:path d="M7.48 5.335a1.027 1.027 0 1 1-1.785-1.017A1.027 1.027 0 0 1 7.48 5.335m-3.046.128a.772.772 0 1 1-1.325-.791a.772.772 0 0 1 1.325.791m9.291 14.7a8.217 8.217 0 1 0-2.044-16.308a6.7 6.7 0 0 0-2.003.504c-.75.36-1.233.97-1.233 1.787c0 1.058.827 1.71 1.885 1.71c.18 0 .791-.195.935-.241a4.4 4.4 0 0 1 1.736-.236c2.881 0 4.38 2.362 4.38 4.9c0 2.537-1.817 4.345-4.955 4.345c-2.753 0-4.186-2.738-4.289-5.24c-.036-1.027-.637-1.828-1.674-1.828a1.92 1.92 0 0 0-1.854 1.418a8.218 8.218 0 0 0 9.116 9.188"></svg:path><svg:path d="M6.418 8.293a1.285 1.285 0 1 1-2.209-1.315a1.285 1.285 0 0 1 2.209 1.315"></svg:path></svg:g>`,
})
export class TokenBrandedOxtIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
