import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFantuanDeliveryIcon],svg[arcticons-fantuan-delivery-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.106 6.876C14.023 6.876 4.5 21.16 4.5 31.982c0 5.659 4.867 9.143 8.467 9.143h22.066c5.194 0 8.467-4.646 8.467-9.143c0-11.15-9.143-25.106-19.384-25.106z"></svg:path><svg:ellipse cx="15.005" cy="23.947" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2.228" ry="2.903"></svg:ellipse><svg:ellipse cx="33.206" cy="23.947" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2.228" ry="2.903"></svg:ellipse><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.699 41.125v-8.953h18.94v8.953"></svg:path>`,
})
export class ArcticonsFantuanDeliveryIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
