import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEsisIcon],svg[arcticons-esis-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 28.22h5.31M4.5 17.6h5.31M4.5 22.91h3.46M4.5 17.6v10.62m7.24-1.17a3 3 0 0 0 2.6 1.17h1.57a2.66 2.66 0 0 0 2.65-2.66h0a2.65 2.65 0 0 0-2.65-2.65h-1.74a2.65 2.65 0 0 1-2.64-2.65h0a2.65 2.65 0 0 1 2.64-2.66h1.57a3 3 0 0 1 2.61 1.17m18.33 8.28a3 3 0 0 0 2.6 1.17h1.57a2.66 2.66 0 0 0 2.65-2.66h0a2.65 2.65 0 0 0-2.65-2.65h-1.73a2.65 2.65 0 0 1-2.65-2.65h0a2.65 2.65 0 0 1 2.65-2.66h1.57a3 3 0 0 1 2.6 1.17"></svg:path><svg:circle cx="27.5" cy="19.12" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m26.14 21.93l1.36-.29v5.76l1.37-.3"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.5 16.21A6.91 6.91 0 0 0 23 28.32l-.32 3.47L26 29.85a6.6 6.6 0 0 0 1.5.15a6.91 6.91 0 0 0 0-13.82Z"></svg:path>`,
})
export class ArcticonsEsisIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
