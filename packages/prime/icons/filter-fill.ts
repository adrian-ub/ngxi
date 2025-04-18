import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[primeFilterFillIcon],svg[prime-filter-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.17 3.91a.76.76 0 0 0-.67-.41h-15a.76.76 0 0 0-.67.41a.73.73 0 0 0 .07.78L9.25 12v7.75a.76.76 0 0 0 .75.75h4a.76.76 0 0 0 .75-.75V12l5.35-7.31a.73.73 0 0 0 .07-.78"></svg:path>`,
})
export class PrimeFilterFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
