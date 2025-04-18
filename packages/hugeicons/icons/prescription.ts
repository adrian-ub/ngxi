import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPrescriptionIcon],svg[hugeicons-prescription-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m19 21l-9-9m-5 7V5c0-1.655.345-2 2-2h2.5a4.5 4.5 0 1 1 0 9H5m14 3l-6 6" color="currentColor"></svg:path>`,
})
export class HugeiconsPrescriptionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
