import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenSsvIcon],svg[token-ssv-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.248 6.62a.38.38 0 0 1 0-.483l2.458-2.998a.378.378 0 0 1 .587 0l2.463 2.998a.38.38 0 0 1 0 .483l-2.463 2.913a.378.378 0 0 1-.587 0L9.243 6.62zm0 11.328a.38.38 0 0 1 0-.483l2.458-2.998a.38.38 0 0 1 .587 0l2.463 2.998a.38.38 0 0 1 0 .483l-2.463 2.913a.378.378 0 0 1-.587 0l-2.463-2.913zm-3.553-6.815a.38.38 0 0 1-.004-.483L8.13 7.652a.38.38 0 0 1 .587 0l2.439 2.998a.38.38 0 0 1 0 .483l-2.444 2.913a.38.38 0 0 1-.578 0zm7.152 0a.38.38 0 0 1 0-.483l2.434-2.998a.38.38 0 0 1 .587 0l2.44 2.998a.38.38 0 0 1 0 .483l-2.445 2.913a.38.38 0 0 1-.577 0z"></svg:path>`,
})
export class TokenSsvIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
