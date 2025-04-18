import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsShareViaHttpIcon],svg[arcticons-share-via-http-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M37.344 16.81a6.1 6.1 0 0 0-2.35.468a10.745 10.745 0 0 0-20.274-3.146a7.706 7.706 0 1 0-2.511 14.99h25.135a6.156 6.156 0 1 0 0-12.312"></svg:path><svg:circle cx="14" cy="22.956" r="3.925" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="34" cy="22.956" r="3.925" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="24" cy="35.956" r="3.925" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m31.608 26.066l-5.216 6.781m-10-6.781l5.216 6.781"></svg:path>`,
})
export class ArcticonsShareViaHttpIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
