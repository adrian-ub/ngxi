import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignBulletpointIcon],svg[tdesign-bulletpoint-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 6.004H2V4h2.004v2.004zm0 7H2V11h2.004v2.004zm-1 7h2.004V18H2zM8 4H7v2h15V4zm-1 7h15v2H7zm1 7H7v2h15v-2z"></svg:path>`,
})
export class TdesignBulletpointIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
