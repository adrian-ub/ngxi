import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedSsvIcon],svg[token-branded-ssv-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#009CF2" d="M9.247 6.62a.38.38 0 0 1 0-.483l2.458-2.998a.38.38 0 0 1 .587 0l2.463 2.998a.38.38 0 0 1 0 .483l-2.463 2.913a.378.378 0 0 1-.587 0L9.242 6.62z"></svg:path><svg:path fill="#00649B" d="M9.247 17.948a.38.38 0 0 1 0-.483l2.458-2.998a.38.38 0 0 1 .456-.103a.4.4 0 0 1 .13.103l2.464 2.998a.38.38 0 0 1 0 .483l-2.463 2.912a.378.378 0 0 1-.587 0l-2.463-2.912z"></svg:path><svg:path fill="#009CF2" d="M5.695 11.133a.38.38 0 0 1-.004-.483L8.13 7.652a.38.38 0 0 1 .587 0l2.439 2.998a.38.38 0 0 1 0 .483l-2.444 2.913a.38.38 0 0 1-.578 0zm7.151 0a.38.38 0 0 1 0-.483l2.435-2.998a.38.38 0 0 1 .587 0l2.439 2.998a.38.38 0 0 1 0 .483l-2.444 2.913a.378.378 0 0 1-.577 0z"></svg:path></svg:g>`,
})
export class TokenBrandedSsvIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
