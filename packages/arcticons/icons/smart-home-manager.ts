import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSmartHomeManagerIcon],svg[arcticons-smart-home-manager-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.09 27.388c7.629.114 13.92 6.406 14.51 14.514M8.09 32.387c4.833.113 8.847 4.179 9.395 9.515M8.09 37.408c2.078.115 3.833 1.96 4.276 4.494M39.71 21.81v17.21a2.547 2.547 0 0 1-2.553 2.554H26.103"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 24.6L24 6.098l7.436 7.438V7.978h5.195v10.751L42.5 24.6"></svg:path>`,
})
export class ArcticonsSmartHomeManagerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
