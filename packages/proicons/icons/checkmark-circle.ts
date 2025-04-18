import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsCheckmarkCircleIcon],svg[proicons-checkmark-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:circle cx="12" cy="12" r="9.25"></svg:circle><svg:path stroke-linejoin="round" d="m16.375 9.194l-5.611 5.612l-3.139-3.134"></svg:path></svg:g>`,
})
export class ProiconsCheckmarkCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
