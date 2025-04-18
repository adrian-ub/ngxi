import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[primeSignInIcon],svg[prime-sign-in-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 20.75h-3a.75.75 0 0 1 0-1.5h3a1.16 1.16 0 0 0 1.25-1V5.78a1.16 1.16 0 0 0-1.25-1h-3a.75.75 0 0 1 0-1.5h3a2.64 2.64 0 0 1 2.75 2.53v12.41A2.64 2.64 0 0 1 18 20.75"></svg:path><svg:path fill="currentColor" d="M11 16.75a.74.74 0 0 1-.53-.22a.75.75 0 0 1 0-1.06L13.94 12l-3.47-3.47a.75.75 0 0 1 1.06-1.06l4 4a.75.75 0 0 1 0 1.06l-4 4a.74.74 0 0 1-.53.22"></svg:path><svg:path fill="currentColor" d="M15 12.75H4a.75.75 0 0 1 0-1.5h11a.75.75 0 0 1 0 1.5"></svg:path>`,
})
export class PrimeSignInIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
