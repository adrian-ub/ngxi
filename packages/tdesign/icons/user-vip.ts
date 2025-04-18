import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignUserVipIcon],svg[tdesign-user-vip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 4a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7M6 7.5a5.5 5.5 0 1 1 11 0a5.5 5.5 0 0 1-11 0m8.382 6h7.236l2.081 4.162L18 23.995l-5.7-6.333zm1.236 2l-.919 1.838L18 21.005l3.3-3.667l-.918-1.838zM8 16a4 4 0 0 0-4 4h7.05v2H2v-2a6 6 0 0 1 6-6h3v2z"></svg:path>`,
})
export class TdesignUserVipIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
