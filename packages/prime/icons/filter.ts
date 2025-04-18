import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[primeFilterIcon],svg[prime-filter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 20.5h-4a.76.76 0 0 1-.75-.75V12L3.9 4.69a.73.73 0 0 1-.07-.78a.76.76 0 0 1 .67-.41h15a.76.76 0 0 1 .67.41a.73.73 0 0 1-.07.78L14.75 12v7.75a.76.76 0 0 1-.75.75M10.75 19h2.5v-7.25a.7.7 0 0 1 .15-.44L18 5H6l4.62 6.31a.7.7 0 0 1 .15.44Z"></svg:path>`,
})
export class PrimeFilterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
