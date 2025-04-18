import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenEuroeIcon],svg[token-euroe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3h18v3.214H6.214v1.929H21v3.214H3zm0 9.643h18v3.214H6.214v1.929H21V21H3z"></svg:path>`,
})
export class TokenEuroeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
