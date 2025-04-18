import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[primeTwitterIcon],svg[prime-twitter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#primeTwitter0)"><svg:path fill="currentColor" d="M11.025.656h2.147L8.482 6.03L14 13.344H9.68L6.294 8.909l-3.87 4.435H.275l5.016-5.75L0 .657h4.43L7.486 4.71zm-.755 11.4h1.19L3.78 1.877H2.504z"></svg:path></svg:g><svg:defs><svg:clippath id="primeTwitter0"><svg:path fill="#fff" d="M0 0h14v14H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class PrimeTwitterIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
