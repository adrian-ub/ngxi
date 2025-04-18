import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icRoundShowerIcon],svg[ic-round-shower-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="8" cy="17" r="1" fill="currentColor"></svg:circle><svg:circle cx="12" cy="17" r="1" fill="currentColor"></svg:circle><svg:circle cx="16" cy="17" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M13 5.08V4c0-.55-.45-1-1-1s-1 .45-1 1v1.08C7.61 5.57 5 8.47 5 12v1c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-1c0-3.53-2.61-6.43-6-6.92"></svg:path><svg:circle cx="8" cy="20" r="1" fill="currentColor"></svg:circle><svg:circle cx="12" cy="20" r="1" fill="currentColor"></svg:circle><svg:circle cx="16" cy="20" r="1" fill="currentColor"></svg:circle>`,
})
export class IcRoundShowerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
