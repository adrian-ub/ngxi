import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAmazonSellerIcon],svg[arcticons-amazon-seller-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m26.18 10.823l5.901 5.94l4.086 23.15L15.92 43.5l-4.086-23.15l3.509-7.607z"></svg:path><svg:path d="M22.64 14.716a1.34 1.34 0 1 1-2.638.467h0a1.34 1.34 0 1 1 2.638-.467"></svg:path><svg:path d="M18.984 4.5c.213 2.901.81 7.22 2.131 9.352"></svg:path><svg:path d="M20.451 5.36c.183 3.952.845 9.308.203 8.567m8.708 13.148c.718-.425 2.019-1.052 2.512-.661c.534.422.163 1.61-.206 2.546"></svg:path><svg:path d="M15.262 29.918c1.373.68 5.207 1.416 9.033.738c3.647-.646 5.657-2.266 6.68-3.22"></svg:path></svg:g>`,
})
export class ArcticonsAmazonSellerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
