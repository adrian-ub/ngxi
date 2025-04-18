import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBoraIcon],svg[token-bora-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.894 2h8.15c3.193 0 8.887 3.069 8.955 9.644C22.043 15.769 19.762 22 11.97 22C7.405 22 2 18.625 2 12.863V5.069C2 4.082 2.937 2 4.894 2m2.45 3.125c.693 0 .906.5.906.75v1.631c.594-.406 2.406-1.125 4.012-1.125c2.038 0 5.988 1.713 5.988 5.857c0 4.137-3.2 5.943-5.988 6.012c-2.787.062-5.156-1.713-5.85-3.581c-.075-.313-.087-1.05.475-1.35c.55-.3 1.225.106 1.363.525c.256.78 1.912 2.53 4.012 2.53c2.394 0 4.113-1.705 4.113-4.136c0-2.438-1.963-3.988-4.113-3.988S8.77 9.625 8.1 11.031c-.181.394-.519.613-.963.375c-.25-.13-.762-.5-.762-.962V5.875c0-.294.281-.75.969-.75m6.53 7.188a1.563 1.563 0 1 1-3.125 0a1.563 1.563 0 0 1 3.126 0" clip-rule="evenodd"></svg:path>`,
})
export class TokenBoraIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
