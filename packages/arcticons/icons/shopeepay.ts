import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsShopeepayIcon],svg[arcticons-shopeepay-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.703 13.456h28.328c1.735 0 3.469 1.734 3.469 3.468V37.16c0 1.734-1.734 3.469-3.469 3.469H8.97c-1.735 0-3.469-1.735-3.469-3.47V13.457c0-2.891.578-3.758 2.89-3.758l24.86-2.313c2.023-.115 2.313.578 2.313 1.446v4.625"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.83 34.035c1.335 1 2.669 1.334 5.337 1.334h1.334a4.336 4.336 0 0 0 0-8.672H22.5a4.336 4.336 0 0 1 0-8.672h1.335c3.001 0 4.335.334 5.336 1.334"></svg:path>`,
})
export class ArcticonsShopeepayIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
