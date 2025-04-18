import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedViteIcon],svg[token-branded-vite-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#007AFF" d="m3 7.725l5.625-1.35l-.563 14.063zm6.75-1.524L21 3.563L8.231 20.274L9.75 6.206z"></svg:path>`,
})
export class TokenBrandedViteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
