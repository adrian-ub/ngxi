import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedQlcIcon],svg[token-branded-qlc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#05C7FF"><svg:path d="M12 18.17a.754.754 0 0 0 0-1.508a4.653 4.653 0 0 1-4.668-4.669a.754.754 0 0 0-1.502 0A6.17 6.17 0 0 0 12 18.175zm0-12.342a.754.754 0 0 0 0 1.508a4.653 4.653 0 0 1 4.67 4.668a.754.754 0 0 0 1.501 0a6.17 6.17 0 0 0-6.17-6.176"></svg:path><svg:path d="M12.006 8.625A3.36 3.36 0 0 1 15.375 12a.776.776 0 0 1-1.547 0a1.83 1.83 0 0 0-3.123-1.285A1.829 1.829 0 0 0 12 13.834a.776.776 0 0 1 0 1.54a3.37 3.37 0 0 1-2.386-.99a3.375 3.375 0 0 1 2.392-5.76m3.121 6.502a.826.826 0 0 0 0-1.18l-.01-.018a.844.844 0 0 0-1.182 0a.844.844 0 0 0 0 1.187l.006.011a.83.83 0 0 0 1.186 0M12 3a.754.754 0 0 0 0 1.507A7.48 7.48 0 0 1 19.498 12A.754.754 0 0 0 21 12a9 9 0 0 0-2.638-6.368A9 9 0 0 0 12 3m0 18a.754.754 0 0 0 0-1.508A7.48 7.48 0 0 1 4.502 12A.751.751 0 1 0 3 12.01a8.95 8.95 0 0 0 2.638 6.356A8.95 8.95 0 0 0 12 21"></svg:path></svg:g>`,
})
export class TokenBrandedQlcIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
