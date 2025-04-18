import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLookofdisapprovalIcon],svg[arcticons-lookofdisapproval-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" d="M18.934 32.448h10.132"></svg:path><svg:circle cx="12.581" cy="25.151" r="5.617" fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" d="M6.534 19.534h9.958A1.91 1.91 0 0 0 17.51 16"></svg:path><svg:circle cx="35.647" cy="25.151" r="5.617" fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" d="M29.6 19.534h9.958A1.91 1.91 0 0 0 40.576 16"></svg:path><svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="12.581" cy="25.151" r=".75" fill="currentColor"></svg:circle><svg:circle cx="35.647" cy="25.151" r=".75" fill="currentColor"></svg:circle>`,
})
export class ArcticonsLookofdisapprovalIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
