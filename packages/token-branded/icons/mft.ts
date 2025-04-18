import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedMftIcon],svg[token-branded-mft-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#DA1157" fill-rule="evenodd" d="M13.53 12c0 2.982-2.357 5.4-5.265 5.4S3 14.982 3 12s2.357-5.4 5.265-5.4S13.53 9.017 13.53 12m-2.97 0c0 1.3-1.028 2.354-2.295 2.354C6.997 14.354 5.97 13.3 5.97 12s1.027-2.353 2.295-2.353c1.267 0 2.295 1.053 2.295 2.353" clip-rule="evenodd"></svg:path><svg:path fill="#00A7E7" fill-rule="evenodd" d="M21 12c0 2.982-2.357 5.4-5.265 5.4S10.47 14.982 10.47 12s2.357-5.4 5.265-5.4S21 9.017 21 12m-2.97 0c0 1.3-1.028 2.354-2.296 2.354S13.44 13.3 13.44 12s1.028-2.353 2.295-2.353c1.268 0 2.295 1.053 2.295 2.353" clip-rule="evenodd"></svg:path><svg:path fill="#1F3464" d="M10.461 11.965c0-1.935 1.013-3.326 1.54-3.78a5.24 5.24 0 0 1 1.556 3.78A5.77 5.77 0 0 1 12 15.817a5.5 5.5 0 0 1-1.539-3.852"></svg:path></svg:g>`,
})
export class TokenBrandedMftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
