import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedWigoIcon],svg[token-branded-wigo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#070BF0" d="M21 12h-1.928V6.073a15.01 15.01 0 0 1-15.21 4.089L3 9.904l.514-1.729l.868.257c4.822 1.44 10.093.148 13.539-3.503H12V3h9zM3 12h1.929v5.927a15.01 15.01 0 0 1 15.21-4.088l.861.257l-.514 1.729l-.868-.257a13.35 13.35 0 0 0-13.539 3.504H12V21H3z"></svg:path>`,
})
export class TokenBrandedWigoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
