import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedRaeIcon],svg[token-branded-rae-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#383F51" d="M7.33 11.526L3 8.793l7.579-4.372zm9.34 0L21 8.793l-7.579-4.372zM8.685 12L12 4.42L15.316 12L12 19.579z"></svg:path>`,
})
export class TokenBrandedRaeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
