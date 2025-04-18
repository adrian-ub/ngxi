import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenRariIcon],svg[token-rari-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 5.25h14.39c1.994 0 3.61 1.605 3.61 3.586a3.59 3.59 0 0 1-2.003 3.212c1.186.578 2.003 1.779 2.003 3.166q0 .163-.015.322H21v3.214h-5.143v-3.424c0-.594-.545-1.076-1.217-1.076H8.143v4.5H3zm11.893 3.214h-6.75v1.929h6.75c.414 0 .964-.432.964-.964c0-.533-.55-.965-.964-.965" clip-rule="evenodd"></svg:path>`,
})
export class TokenRariIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
