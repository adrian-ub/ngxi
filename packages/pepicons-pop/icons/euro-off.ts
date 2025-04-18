import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopEuroOffIcon],svg[pepicons-pop-euro-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M12.489 4C9.43 4 7 6.213 7 9.5c0 3.387 2.527 6 5.489 6c.743 0 1.451-.161 2.098-.454a1 1 0 1 1 .826 1.821a7.1 7.1 0 0 1-2.924.633C8.283 17.5 5 13.845 5 9.5C5 5.055 8.38 2 12.489 2q1.855.001 3.574 1.174a1 1 0 1 1-1.126 1.652C14.08 4.242 13.274 4 12.489 4" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M3 8a1 1 0 0 1 1-1h9a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1m0 3.5a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1" clip-rule="evenodd"></svg:path><svg:path d="M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path></svg:g>`,
})
export class PepiconsPopEuroOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
