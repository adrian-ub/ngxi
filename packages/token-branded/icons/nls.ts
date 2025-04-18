import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedNlsIcon],svg[token-branded-nls-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#FF562D" fill-rule="evenodd" d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18M8.974 7.5A1.474 1.474 0 0 0 7.5 8.974v6.052A1.474 1.474 0 0 0 8.974 16.5h6.052a1.474 1.474 0 0 0 1.474-1.474V8.974A1.474 1.474 0 0 0 15.026 7.5z" clip-rule="evenodd"></svg:path>`,
})
export class TokenBrandedNlsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
