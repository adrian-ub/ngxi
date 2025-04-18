import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenOntIcon],svg[token-ont-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 10.891V3.387l14.85 15.321c-.306.259-4.014 3.3-8.424 1.946c-3.843-1.18-6.561-5.18-6.417-9.772zm17.973 2.25L21 20.589L6.105 5.314c.306-.267 4.014-3.319 8.415-1.973c3.852 1.162 6.597 5.18 6.453 9.79z"></svg:path>`,
})
export class TokenOntIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
