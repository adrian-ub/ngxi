import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[primeVideoIcon],svg[prime-video-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 18.75H6A2.75 2.75 0 0 1 3.25 16V8A2.75 2.75 0 0 1 6 5.25h7A2.75 2.75 0 0 1 15.75 8v8A2.75 2.75 0 0 1 13 18.75m-7-12A1.25 1.25 0 0 0 4.75 8v8A1.25 1.25 0 0 0 6 17.25h7A1.25 1.25 0 0 0 14.25 16V8A1.25 1.25 0 0 0 13 6.75Z"></svg:path><svg:path fill="currentColor" d="M20 16.75a.8.8 0 0 1-.39-.11l-5-3a.75.75 0 0 1-.36-.64v-2a.75.75 0 0 1 .36-.64l5-3a.74.74 0 0 1 .76 0a.75.75 0 0 1 .38.65v8a.75.75 0 0 1-.38.65a.7.7 0 0 1-.37.09m-4.25-4.17l3.5 2.1V9.32l-3.5 2.1Z"></svg:path>`,
})
export class PrimeVideoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
