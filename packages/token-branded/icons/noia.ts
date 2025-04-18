import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedNoiaIcon],svg[token-branded-noia-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fff" fill-rule="evenodd" d="M12 12s2.813-4.634 2.813-6.188a2.812 2.812 0 0 0-5.626 0C9.187 7.366 12 12 12 12m0 0s-4.634 2.813-6.188 2.813a2.812 2.812 0 0 1 0-5.626C7.366 9.187 12 12 12 12m0 0s4.634-2.813 6.187-2.813a2.812 2.812 0 1 1 0 5.626C16.634 14.813 12 12 12 12m0 0s2.813 4.634 2.813 6.187a2.812 2.812 0 0 1-5.626 0C9.187 16.634 12 12 12 12" clip-rule="evenodd"></svg:path>`,
})
export class TokenBrandedNoiaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
