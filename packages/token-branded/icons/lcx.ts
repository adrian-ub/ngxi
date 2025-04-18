import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedLcxIcon],svg[token-branded-lcx-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#5E5E5E" d="M6.937 5.812V3L12 8.012L17.063 3v2.812L12 10.875zm0 12.375V21L12 15.988L17.063 21v-2.813L12 13.125zm11.25-1.125H21L15.988 12L21 6.937h-2.813L13.125 12zm-12.375 0H3L8.012 12L3 6.937h2.812L10.875 12z"></svg:path>`,
})
export class TokenBrandedLcxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
