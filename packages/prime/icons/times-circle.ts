import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[primeTimesCircleIcon],svg[prime-times-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 21a9 9 0 1 1 9-9a9 9 0 0 1-9 9m0-16.5a7.5 7.5 0 1 0 7.5 7.5A7.5 7.5 0 0 0 12 4.5"></svg:path><svg:path fill="currentColor" d="M9 15.75a.74.74 0 0 1-.53-.22a.75.75 0 0 1 0-1.06l6-6a.75.75 0 0 1 1.06 1.06l-6 6a.74.74 0 0 1-.53.22"></svg:path><svg:path fill="currentColor" d="M15 15.75a.74.74 0 0 1-.53-.22l-6-6a.75.75 0 0 1 1.06-1.06l6 6a.75.75 0 0 1 0 1.06a.74.74 0 0 1-.53.22"></svg:path>`,
})
export class PrimeTimesCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
