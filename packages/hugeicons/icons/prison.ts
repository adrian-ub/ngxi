import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPrisonIcon],svg[hugeicons-prison-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 3v18M9 3v18m6-6v6m0-18v6m6-6v18M2 3h20m-1 6h-6c-.943 0-1.414 0-1.707.293S13 10.057 13 11v2c0 .943 0 1.414.293 1.707S14.057 15 15 15h6M2 21h20m-5-9h-1" color="currentColor"></svg:path>`,
})
export class HugeiconsPrisonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
