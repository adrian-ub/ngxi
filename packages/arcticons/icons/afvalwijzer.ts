import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAfvalwijzerIcon],svg[arcticons-afvalwijzer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="15.749" cy="36.604" r="5.896" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.771 11.04L38.147 5.5m-24.535 7.44h23.744L31.42 41.352h-6.952v-4.999A8.47 8.47 0 0 0 16 27.885h-2.388z"></svg:path><svg:circle cx="15.749" cy="36.604" r="2.216" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsAfvalwijzerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
