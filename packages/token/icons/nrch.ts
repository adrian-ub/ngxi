import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenNrchIcon],svg[token-nrch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.821 10.071V4.884A1.896 1.896 0 0 1 9.737 3h10.94v1.33a1.95 1.95 0 0 1-1.966 1.884h-6.557a.47.47 0 0 0-.476.463v3.394h7.071v1.363a1.887 1.887 0 0 1-1.915 1.851H5.237a1.89 1.89 0 0 1-1.76-1.133a1.9 1.9 0 0 1-.155-.718V10.07zm3.858 5.144v2.006c0 .314.257.565.559.565h6.518a1.93 1.93 0 0 1 1.922 1.941V21H9.744a1.93 1.93 0 0 1-1.922-1.941v-3.844z"></svg:path>`,
})
export class TokenNrchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
