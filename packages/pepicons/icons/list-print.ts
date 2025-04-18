import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsListPrintIcon],svg[pepicons-list-print-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g opacity=".8"><svg:circle cx="6" cy="7.25" r="1.5" fill="currentColor"></svg:circle><svg:circle cx="6" cy="11.25" r="1.5" fill="currentColor"></svg:circle><svg:circle cx="6" cy="15.25" r="1.5" fill="currentColor"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M9.5 7.25h7m-7 4h7m-7 4h7"></svg:path></svg:g><svg:circle cx="5" cy="6" r="1.5" fill="currentColor"></svg:circle><svg:circle cx="5" cy="10" r="1.5" fill="currentColor"></svg:circle><svg:circle cx="5" cy="14" r="1.5" fill="currentColor"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" d="M8 6.5h8m-8 4h8m-8 4h8"></svg:path></svg:g>`,
})
export class PepiconsListPrintIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
