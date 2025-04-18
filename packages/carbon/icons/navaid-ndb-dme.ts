import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonNavaidNdbDmeIcon],svg[carbon-navaid-ndb-dme-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 12H2V4a2 2 0 0 1 2-2h8v2H4zm8 18H4a2 2 0 0 1-2-2v-8h2v8h8zm16 0h-8v-2h8v-8h2v8a2 2 0 0 1-2 2m2-18h-2V4h-8V2h8a2 2 0 0 1 2 2zM16 22a6 6 0 1 1 6-6a6.007 6.007 0 0 1-6 6m0-10a4 4 0 1 0 4 4a4.005 4.005 0 0 0-4-4"></svg:path><svg:circle cx="16" cy="16" r="2" fill="currentColor"></svg:circle><svg:circle cx="16" cy="7" r="1" fill="currentColor"></svg:circle><svg:circle cx="16" cy="3" r="1" fill="currentColor"></svg:circle><svg:circle cx="16" cy="25" r="1" fill="currentColor"></svg:circle><svg:circle cx="16" cy="29" r="1" fill="currentColor"></svg:circle><svg:circle cx="25" cy="16" r="1" fill="currentColor"></svg:circle><svg:circle cx="29" cy="16" r="1" fill="currentColor"></svg:circle><svg:circle cx="7" cy="16" r="1" fill="currentColor"></svg:circle><svg:circle cx="3" cy="16" r="1" fill="currentColor"></svg:circle><svg:circle cx="9.636" cy="9.636" r="1" fill="currentColor"></svg:circle><svg:circle cx="7" cy="7" r="1" fill="currentColor"></svg:circle><svg:circle cx="22.364" cy="22.364" r="1" fill="currentColor"></svg:circle><svg:circle cx="25" cy="25" r="1" fill="currentColor"></svg:circle><svg:circle cx="22.364" cy="9.636" r="1" fill="currentColor"></svg:circle><svg:circle cx="25" cy="7" r="1" fill="currentColor"></svg:circle><svg:circle cx="9.636" cy="22.364" r="1" fill="currentColor"></svg:circle><svg:circle cx="7" cy="25" r="1" fill="currentColor"></svg:circle>`,
})
export class CarbonNavaidNdbDmeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
