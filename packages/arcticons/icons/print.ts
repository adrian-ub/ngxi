import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPrintIcon],svg[arcticons-print-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.517 35.415H6.403a.903.903 0 0 1-.903-.903V21.008c0-.498.404-.902.903-.902h35.194c.499 0 .903.404.903.902v13.504a.903.903 0 0 1-.903.903h-8.114"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.517 31.437h18.966v10.13H14.517zm0-11.331V6.433h14.966l4 4v9.673"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.483 6.433v4h4"></svg:path><svg:circle cx="39.852" cy="22.898" r=".75" fill="currentColor"></svg:circle><svg:circle cx="36.835" cy="22.898" r=".75" fill="currentColor"></svg:circle><svg:circle cx="33.819" cy="22.898" r=".75" fill="currentColor"></svg:circle>`,
})
export class ArcticonsPrintIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
