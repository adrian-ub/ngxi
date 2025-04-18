import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedCetusIcon],svg[token-branded-cetus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#68FFD8" d="M20.438 11.438c0 4.54-3.78 8.005-8.438 8.005q-.66-.002-1.294-.096c-1.76 1.587-4.736 1.71-6.086 1.637l1.26-4.106a8.08 8.08 0 0 1-2.318-5.648C3.562 6.679 7.342 3 12 3c4.106 0 7.521 2.852 8.28 6.632c-.933-.13-2.148-.529-2.475-1.496c-.253.562-1.203 1.62-3.077 1.57a3 3 0 0 0 .433-1.57A3.12 3.12 0 0 0 12 5.053a3.12 3.12 0 0 0-3.167 3.083c.006 1.704 1.423 3.302 3.167 3.302z"></svg:path><svg:path fill="#00D49E" d="M17.592 11.437c-.98 4.691-5.232 8.004-10.34 8.004q-1.078 0-2.098-.202l-.54 1.744c1.356.073 4.332-.057 6.087-1.637q.64.094 1.3.095c4.657 0 8.437-3.465 8.437-8.004zm.208-3.303c.017-.028-.011.034 0 0c.332.968 1.547 1.367 2.475 1.497a8.23 8.23 0 0 0-3.735-5.344c.663 1.192 1.125 2.435 1.26 3.847"></svg:path></svg:g>`,
})
export class TokenBrandedCetusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
