import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenRbifIcon],svg[token-rbif-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.813 21h5.062V3H9.609c.18 4.871-.337 15.294-3.796 18m12.375 0h-5.063V3h1.266c-.18 4.871.337 15.294 3.797 18"></svg:path>`,
})
export class TokenRbifIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
