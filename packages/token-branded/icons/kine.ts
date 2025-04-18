import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedKineIcon],svg[token-branded-kine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#12A8A7" fill-rule="evenodd" d="M4.2 3h5.4v5.4H4.2zm0 12.6h5.4V21H4.2zM9 12l6-9h4.8l-5.7 9l5.7 9H15z" clip-rule="evenodd"></svg:path>`,
})
export class TokenBrandedKineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
