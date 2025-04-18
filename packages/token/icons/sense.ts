import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenSenseIcon],svg[token-sense-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width=".3" d="M17.21 14.75L12.948 9m4.264 5.75L13.42 18m3.79-3.25l-5.976.25m1.713-6l1.42-6l-3.789 3.25M12.947 9l-1.712 6m1.713-6l-6.158.5m6.158-.5l-2.369-2.75M13.421 18l-3.553 3l1.367-6m2.186 3l-2.186-3m0 0L6.79 9.5m3.789-3.25L6.789 9.5"></svg:path>`,
})
export class TokenSenseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
