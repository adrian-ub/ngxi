import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riMastercardLineIcon],svg[ri-mastercard-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.001 18.294a7.3 7.3 0 1 1 0-12.588a7.3 7.3 0 1 1 0 12.588m1.702-1.384a5.3 5.3 0 1 0 0-9.82A7.27 7.27 0 0 1 15.6 12c0 1.89-.719 3.614-1.898 4.91m-3.404-9.82a5.3 5.3 0 1 0 0 9.82A7.27 7.27 0 0 1 8.401 12c0-1.89.719-3.614 1.898-4.91m1.702 1.115a5.28 5.28 0 0 0-1.6 3.795c0 1.488.613 2.832 1.6 3.795a5.28 5.28 0 0 0 1.6-3.795a5.28 5.28 0 0 0-1.6-3.795"></svg:path>`,
})
export class RiMastercardLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
