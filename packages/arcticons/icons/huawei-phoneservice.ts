import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsHuaweiPhoneserviceIcon],svg[arcticons-huawei-phoneservice-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.372 7.686a20.9 20.9 0 0 0 6.683 5.514l11.657-.293a42.4 42.4 0 0 1 1.523 25.424c-7.659 3.464-16.35 4.153-25.775 2.87c-5.208-5.04-7.676-11.162-9.57-17.867c-.587-2.082-.906-5.634 2.036-6.042c3.63-.504 11.385.284 11.207-.282c-4.293-2.93-2.602-14.973 2.239-9.325Zm9.085 5.454l1.816 18.807"></svg:path>`,
})
export class ArcticonsHuaweiPhoneserviceIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
