import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTractorIcon],svg[hugeicons-tractor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:circle cx="6.5" cy="16.5" r="4.5"></svg:circle><svg:circle cx="19" cy="18" r="3"></svg:circle><svg:path d="M2 10.5a7.5 7.5 0 0 1 11.995 6.287c-.023.604-.034.907.113 1.06s.42.153.965.153H16m-3-9l3.106.582c2.34.44 3.511.659 4.202 1.492c.692.833.692 2.03.692 4.426M20 12h-1"></svg:path><svg:path d="M13 12.5V9.587q0-.587-.169-1.15L11.5 3M4 9V3M3 3h10m5 6.5V8a2 2 0 0 1 2-2M7 9V3"></svg:path></svg:g>`,
})
export class HugeiconsTractorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
