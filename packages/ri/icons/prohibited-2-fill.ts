import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riProhibited2FillIcon],svg[ri-prohibited-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.257 18.329A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2c2.401 0 4.605.846 6.329 2.257zM19.743 5.67A9.96 9.96 0 0 1 22 12c0 5.523-4.477 10-10 10a9.96 9.96 0 0 1-6.329-2.257z"></svg:path>`,
})
export class RiProhibited2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
