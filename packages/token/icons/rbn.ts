import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenRbnIcon],svg[token-rbn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.003 21a9 9 0 1 0-8.415-5.8l8.55-8.263l5.49 5.305l-5.568 5.383l-.805-.776l4.765-4.607l-3.882-3.752l-8.055 7.785A9 9 0 0 0 12.003 21"></svg:path>`,
})
export class TokenRbnIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
