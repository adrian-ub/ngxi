import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsChromeSolidIcon],svg[teenyicons-chrome-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.503 1.907A7.47 7.47 0 0 1 7.5 0a7.5 7.5 0 0 1 6.635 4H7.5a3.5 3.5 0 0 0-3.23 2.149z"></svg:path><svg:path fill="currentColor" d="M1.745 2.69a7.503 7.503 0 0 0 3.41 11.937l2.812-3.658Q7.737 11 7.5 11a3.5 3.5 0 0 1-3.412-2.716a.5.5 0 0 1-.05-.092z"></svg:path><svg:path fill="currentColor" d="M6.215 14.89Q6.842 15 7.5 15a7.5 7.5 0 0 0 7.072-10.005L14.5 5H9.95A3.5 3.5 0 0 1 11 7.5a3.5 3.5 0 0 1-.953 2.405z"></svg:path><svg:path fill="currentColor" d="M5 7.5a2.5 2.5 0 1 1 5 0a2.5 2.5 0 0 1-5 0"></svg:path>`,
})
export class TeenyiconsChromeSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
