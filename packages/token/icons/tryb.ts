import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenTrybIcon],svg[token-tryb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.247 10.699c.007-.268 0-.976 0-.976L10.75 8v2l4.5 1.17c-.372 4.627-2.539 7.285-6.5 7.83V3.565L6.75 3v18l1.069-.054c3.947-.199 8.584-2.02 9.349-9.224c.035-.33.07-.67.079-1.023M15.24 7.29l.51-1.79l-5-1.5v2z"></svg:path>`,
})
export class TokenTrybIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
