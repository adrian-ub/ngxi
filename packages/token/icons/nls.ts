import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenNlsIcon],svg[token-nls-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 21a8.999 8.999 0 1 0 0-17.998A8.999 8.999 0 0 0 12 21M8.974 7.5A1.474 1.474 0 0 0 7.5 8.974v6.052A1.474 1.474 0 0 0 8.974 16.5h6.052a1.474 1.474 0 0 0 1.474-1.474V8.974A1.474 1.474 0 0 0 15.026 7.5z" clip-rule="evenodd"></svg:path>`,
})
export class TokenNlsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
