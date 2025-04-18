import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsRippleOutlineIcon],svg[teenyicons-ripple-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="m1.5 1.5l3.06 3.316a4 4 0 0 0 5.88 0L13.5 1.5m-12 12l3.06-3.316a4 4 0 0 1 5.88 0L13.5 13.5"></svg:path>`,
})
export class TeenyiconsRippleOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
