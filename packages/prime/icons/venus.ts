import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[primeVenusIcon],svg[prime-venus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 3.75a5.25 5.25 0 1 0 0 10.5a5.25 5.25 0 0 0 0-10.5M5.25 9a6.75 6.75 0 1 1 7.5 6.709v2.041H15a.75.75 0 0 1 0 1.5h-2.25V21a.75.75 0 0 1-1.5 0v-1.75H9a.75.75 0 0 1 0-1.5h2.25v-2.041A6.75 6.75 0 0 1 5.25 9" clip-rule="evenodd"></svg:path>`,
})
export class PrimeVenusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
