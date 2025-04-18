import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedPrqIcon],svg[token-branded-prq-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#005CC7"><svg:path d="M3.017 11.437A9 9 0 0 1 12 3v4.5h3.375v-.563h1.687v1.688h-1.687v-.563H12V12h3.937v3.375h-.562v.562h-6.75v-.562h-.563v-6.75h.563V6.937H6.937v1.688H7.5v2.812z"></svg:path><svg:path d="M15.375 17.063V16.5h-2.812v4.483A9 9 0 0 0 21 12h-4.5v3.375h.563v1.688zm-8.438-1.688H7.5V12H3a9 9 0 0 0 9 9v-4.5H8.625v.563H6.937z"></svg:path></svg:g>`,
})
export class TokenBrandedPrqIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
