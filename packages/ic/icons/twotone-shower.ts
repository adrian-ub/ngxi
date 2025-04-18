import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotoneShowerIcon],svg[ic-twotone-shower-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 7c-2.76 0-5 2.24-5 5h10c0-2.76-2.24-5-5-5" opacity=".3"></svg:path><svg:circle cx="8" cy="20" r="1" fill="currentColor"></svg:circle><svg:circle cx="16" cy="17" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M13 5.08V3h-2v2.08C7.61 5.57 5 8.47 5 12v2h14v-2c0-3.53-2.61-6.43-6-6.92M7 12c0-2.76 2.24-5 5-5s5 2.24 5 5z"></svg:path><svg:circle cx="16" cy="20" r="1" fill="currentColor"></svg:circle><svg:circle cx="12" cy="17" r="1" fill="currentColor"></svg:circle><svg:circle cx="8" cy="17" r="1" fill="currentColor"></svg:circle><svg:circle cx="12" cy="20" r="1" fill="currentColor"></svg:circle>`,
})
export class IcTwotoneShowerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
