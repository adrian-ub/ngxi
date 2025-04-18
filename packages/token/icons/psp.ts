import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenPspIcon],svg[token-psp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 4.688h7.875l-3.926 6.75zm1.294 14.625H21L12.624 4.688zm3.588-2.25h9.36l-4.69-8.438z" clip-rule="evenodd"></svg:path>`,
})
export class TokenPspIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
