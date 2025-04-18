import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonTaskLocationIcon],svg[carbon-task-location-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="21" r="2" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="m24 31l-4.779-6.402A5.94 5.94 0 0 1 18 21a6 6 0 0 1 12 0a5.94 5.94 0 0 1-1.225 3.603Zm0-14a4.005 4.005 0 0 0-4 4a3.96 3.96 0 0 0 .82 2.397l3.18 4.26l3.176-4.255A3.96 3.96 0 0 0 28 21a4.005 4.005 0 0 0-4-4"></svg:path><svg:path fill="currentColor" d="M25 5h-3V4a2.006 2.006 0 0 0-2-2h-8a2.006 2.006 0 0 0-2 2v1H7a2.006 2.006 0 0 0-2 2v21a2.006 2.006 0 0 0 2 2h9v-2H7V7h3v3h12V7h3v5h2V7a2.006 2.006 0 0 0-2-2m-5 3h-8V4h8Z"></svg:path>`,
})
export class CarbonTaskLocationIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
