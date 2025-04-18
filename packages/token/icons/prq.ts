import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenPrqIcon],svg[token-prq-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.017 11.438A9 9 0 0 1 12 3v4.5h3.375v-.563h1.688v1.688h-1.688v-.563H12V12h3.938v3.375h-.563v.563h-6.75v-.563h-.562v-6.75h.562V6.937H6.938v1.688H7.5v2.813z"></svg:path><svg:path fill="currentColor" d="M15.375 17.062V16.5h-2.812v4.483A9 9 0 0 0 21 12h-4.5v3.375h.563v1.687zm-8.438-1.687H7.5V12H3a9 9 0 0 0 9 9v-4.5H8.625v.562H6.937z"></svg:path>`,
})
export class TokenPrqIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
