import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDiaperIcon],svg[hugeicons-diaper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M2 7.692c0-.643 0-.965.05-1.233a3 3 0 0 1 2.41-2.41C4.726 4 5.048 4 5.691 4h12.616c.643 0 .965 0 1.233.05a3 3 0 0 1 2.41 2.41c.049.267.049.589.049 1.232V10c0 5.523-4.477 10-10 10S2 15.523 2 10zM18 8h4M2 8h4"></svg:path><svg:path d="M14.5 19.5v-1a7 7 0 0 1 7-7m-12 8v-1a7 7 0 0 0-7-7"></svg:path></svg:g>`,
})
export class HugeiconsDiaperIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
