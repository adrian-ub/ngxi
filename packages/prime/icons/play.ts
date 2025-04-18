import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[primePlayIcon],svg[prime-play-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 19.75a.8.8 0 0 1-.29-.06a.74.74 0 0 1-.46-.69V5A.75.75 0 0 1 9 4.47l7 7a.75.75 0 0 1 0 1.06l-7 7a.77.77 0 0 1-.5.22m.75-12.94v10.38L14.44 12Z"></svg:path>`,
})
export class PrimePlayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
