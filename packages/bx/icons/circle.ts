import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxCircleIcon],svg[bx-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.486 2 2 6.486 2 12c.001 5.515 4.487 10.001 10 10.001c5.514 0 10-4.486 10.001-10.001S17.515 2 12 2m0 18.001c-4.41 0-7.999-3.589-8-8.001c0-4.411 3.589-8 8-8c4.412 0 8.001 3.589 8.001 8c-.001 4.412-3.59 8.001-8.001 8.001"></svg:path>`,
})
export class BxCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
