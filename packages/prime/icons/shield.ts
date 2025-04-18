import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[primeShieldIcon],svg[prime-shield-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 20.75a.9.9 0 0 1-.28-.05A14.27 14.27 0 0 1 3.29 6.43a.74.74 0 0 1 .61-.69a27.1 27.1 0 0 0 7.79-2.42a.75.75 0 0 1 .62 0a27.1 27.1 0 0 0 7.79 2.42a.74.74 0 0 1 .61.69a14.27 14.27 0 0 1-8.43 14.27a.9.9 0 0 1-.28.05M4.76 7.11A12.47 12.47 0 0 0 12 19.18a12.47 12.47 0 0 0 7.24-12.07A27.6 27.6 0 0 1 12 4.82a27.6 27.6 0 0 1-7.24 2.29"></svg:path>`,
})
export class PrimeShieldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
