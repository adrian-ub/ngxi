import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsItslearningIcon],svg[arcticons-itslearning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path><svg:circle cx="14.413" cy="14.88" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.413 18.913V31.87m11.574-1.093c.892.75 1.856 1.093 4.02 1.093h1.098a3.236 3.236 0 0 0 3.232-3.239h0a3.236 3.236 0 0 0-3.232-3.24H28.91a3.236 3.236 0 0 1-3.232-3.238h0a3.236 3.236 0 0 1 3.232-3.24h1.097c2.164 0 3.128.344 4.02 1.094M20.068 14.88v14.545a2.445 2.445 0 0 0 2.444 2.445h.734m-5.745-12.957h5.133"></svg:path>`,
})
export class ArcticonsItslearningIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
