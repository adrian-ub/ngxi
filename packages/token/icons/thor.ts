import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenThorIcon],svg[token-thor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 12a9 9 0 1 1-17.999 0A9 9 0 0 1 21 12m-9 8.47a8.47 8.47 0 1 0 0-16.94a8.47 8.47 0 0 0 0 16.94"></svg:path><svg:path fill="currentColor" d="m10.284 8.827l1.948 1.885l4.326-4.606l-6.274 2.716zm7.232-3.71l.307.412l-5.574 5.94l-2.896-2.806zm-3.24 9.033l-1.996-1.912l-5.183 5.38zm-8.1 4.468l-.297-.424l6.385-6.723l2.912 2.848z"></svg:path>`,
})
export class TokenThorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
