import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsRandOutlineIcon],svg[teenyicons-rand-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M3.5 14V8.5m0 0v-7H8a3.5 3.5 0 1 1 0 7zm0 0h5a3 3 0 0 1 3 3V14"></svg:path>`,
})
export class TeenyiconsRandOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
