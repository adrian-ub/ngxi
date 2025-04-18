import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[primeEllipsisHIcon],svg[prime-ellipsis-h-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12" cy="12" r="1.75" fill="currentColor"></svg:circle><svg:circle cx="19" cy="12" r="1.75" fill="currentColor"></svg:circle><svg:circle cx="5" cy="12" r="1.75" fill="currentColor"></svg:circle>`,
})
export class PrimeEllipsisHIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
