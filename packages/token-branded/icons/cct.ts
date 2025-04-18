import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedCctIcon],svg[token-branded-cct-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#4E4F4F" d="M15.626 6.776a7.56 7.56 0 0 1 1.93 3.725h-3.58a3.94 3.94 0 0 0-3.15-2.465v-1.26z"></svg:path><svg:path fill="#4F4F4F" d="m13.29 5.14l-4.31 2.2v.915A3.965 3.965 0 0 0 6.5 12H3c0-4.14 3.28-7.5 7.325-7.5c1.055 0 2.06.23 2.965.64"></svg:path><svg:path fill="#F0F3FA" d="M21 13.5c-.69 3.415-3.65 6-7.2 6c-4.06 0-7.3-3.36-7.3-7.5s3.24-7.5 7.3-7.5a7.4 7.4 0 0 1 7.2 6h-3.5A4.03 4.03 0 0 0 13.8 8C11.635 8 10 9.795 10 12s1.635 3.995 3.8 3.995a4.04 4.04 0 0 0 3.7-2.495z"></svg:path><svg:path fill="#4E504C" d="M6.5 12c0 2.205 1.67 3.995 3.825 3.995A4.01 4.01 0 0 0 14 13.5h3.5c-.685 3.415-3.64 6-7.175 6C6.275 19.5 3 16.14 3 12z"></svg:path></svg:g>`,
})
export class TokenBrandedCctIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
