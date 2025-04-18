import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedMtrmIcon],svg[token-branded-mtrm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#F7DF53" d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0"></svg:path><svg:path fill="#8117C9" fill-rule="evenodd" d="M12 20.63a8.63 8.63 0 1 0 0-17.26a8.63 8.63 0 0 0 0 17.258m0 .37a9 9 0 1 0 0-18a9 9 0 0 0 0 18" clip-rule="evenodd"></svg:path><svg:path fill="#440090" d="M19.57 12a7.57 7.57 0 1 1-15.139 0a7.57 7.57 0 0 1 15.14 0"></svg:path><svg:path fill="#2F0065" d="M18.877 12a6.876 6.876 0 1 1-13.753 0a6.876 6.876 0 0 1 13.753 0"></svg:path><svg:path fill="#030007" d="M18.115 11.999a6.114 6.114 0 1 1-12.228 0a6.114 6.114 0 0 1 12.228 0"></svg:path></svg:g>`,
})
export class TokenBrandedMtrmIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
