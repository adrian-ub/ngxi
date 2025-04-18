import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[primeHomeIcon],svg[prime-home-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 11.75a.74.74 0 0 1-.45-.15L12 5.94L4.45 11.6a.75.75 0 0 1-.9-1.2l8-6a.75.75 0 0 1 .9 0l8 6a.75.75 0 0 1 .15 1a.74.74 0 0 1-.6.35"></svg:path><svg:path fill="currentColor" d="M18 19.75H6a.76.76 0 0 1-.75-.75V9.5a.75.75 0 0 1 1.5 0v8.75h10.5V9.5a.75.75 0 0 1 1.5 0V19a.76.76 0 0 1-.75.75"></svg:path><svg:path fill="currentColor" d="M14 19.75a.76.76 0 0 1-.75-.75v-6.25h-2.5V19a.75.75 0 0 1-1.5 0v-7a.76.76 0 0 1 .75-.75h4a.76.76 0 0 1 .75.75v7a.76.76 0 0 1-.75.75"></svg:path>`,
})
export class PrimeHomeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
