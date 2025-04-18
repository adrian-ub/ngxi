import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsParkingAreaCircleIcon],svg[hugeicons-parking-area-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:path d="M9 13V8.4c0-.372 0-.558.049-.709a1 1 0 0 1 .642-.642C9.841 7 10.028 7 10.4 7H13a3 3 0 1 1 0 6zm0 0v5"></svg:path></svg:g>`,
})
export class HugeiconsParkingAreaCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
