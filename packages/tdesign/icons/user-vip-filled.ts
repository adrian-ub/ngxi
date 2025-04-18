import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignUserVipFilledIcon],svg[tdesign-user-vip-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 2a5.5 5.5 0 1 0 0 11a5.5 5.5 0 0 0 0-11m2.882 11.5h7.236l2.081 4.162L18 23.995l-5.7-6.333zm-2.127.5A6.97 6.97 0 0 0 11 18c0 1.487.464 2.866 1.255 4H2v-2a6 6 0 0 1 6-6z"></svg:path>`,
})
export class TdesignUserVipFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
