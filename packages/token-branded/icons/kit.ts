import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedKitIcon],svg[token-branded-kit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#6025E1" fill-rule="evenodd" d="M5.118 5.43v13.029L9.458 21l9.425-4.553V7.48L9.898 3zm.164.064l4.071 2.821V20.81l.847-4.378l4.447-1.985v-4.87l-9.365-4.09z" clip-rule="evenodd"></svg:path>`,
})
export class TokenBrandedKitIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
