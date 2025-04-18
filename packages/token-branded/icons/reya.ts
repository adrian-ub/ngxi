import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedReyaIcon],svg[token-branded-reya-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#08F06A" d="m8.398 14.278l-1.443-2.783V5.807L5.25 3h6.86c4.083 0 6.468 2.068 6.468 5.614c0 2.413-1.131 4.137-3.246 4.999L18.75 21h-3.443l-3.049-6.722zm-1.443-8.47v5.687h5.156c1.991 0 3.172-1.059 3.172-2.88c0-1.798-1.18-2.808-3.172-2.808z"></svg:path>`,
})
export class TokenBrandedReyaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
