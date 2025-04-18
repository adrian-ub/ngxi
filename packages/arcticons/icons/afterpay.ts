import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAfterpayIcon],svg[arcticons-afterpay-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 13.343v-2.325c0-2.391 2.588-3.886 4.659-2.69L41.947 16c2.07 1.195 2.07 4.184 0 5.38L28.66 29.052c-2.07 1.195-4.659-.3-4.659-2.69v-4.724c0-2.39-2.588-3.885-4.659-2.69L6.053 26.622c-2.07 1.195-2.07 4.184 0 5.38l13.288 7.671c2.07 1.196 4.659-.299 4.659-2.69v-2.325"></svg:path>`,
})
export class ArcticonsAfterpayIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
