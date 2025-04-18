import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsListIcon],svg[pepicons-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="5" cy="6" r="1.5" fill="currentColor"></svg:circle><svg:circle cx="5" cy="10" r="1.5" fill="currentColor"></svg:circle><svg:circle cx="5" cy="14" r="1.5" fill="currentColor"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8.5 6h7m-7 4h7m-7 4h7"></svg:path></svg:g>`,
})
export class PepiconsListIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
