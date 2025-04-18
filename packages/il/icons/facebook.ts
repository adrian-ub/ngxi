import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ilFacebookIcon],svg[il-facebook-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M659 8q34 0 59 24t24 58v577q0 35-24 59t-59 24H494V461h83l23-102H494v-69q0-22 13-41t44-19h49V123h-74q-79 0-117 42t-38 110v84h-83v102h83v289H82q-34 0-58-24T0 667V90q0-34 24-58T82 8z"></svg:path>`,
})
export class IlFacebookIcon {
  readonly viewBox = input("0 0 750 850")
  readonly width = input("0.89em")
  readonly height = input("1em")
}
