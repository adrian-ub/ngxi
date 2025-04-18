import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2CouponIcon],svg[fluent-mdl2-coupon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M624 832q0 36-14 68t-38 56t-56 38t-68 14t-68-14t-56-38t-38-56t-14-68t14-68t38-56t56-38t68-14t68 14t56 38t38 56t14 68m-176 80q33 0 56-23t24-57q0-33-23-56t-57-24q-33 0-56 23t-24 57q0 33 23 56t57 24m512 128q36 0 68 14t56 38t38 56t14 68t-14 68t-38 56t-56 38t-68 14t-68-14t-56-38t-38-56t-14-68t14-68t38-56t56-38t68-14m0 256q33 0 56-23t24-57q0-33-23-56t-57-24q-33 0-56 23t-24 57q0 33 23 56t57 24M842 640h108l-384 768H458zm566-256l640 640l-640 640H0V384zm-53 1152l512-512l-512-512H128v1024zm181-576q26 0 45 19t19 45t-19 45t-45 19t-45-19t-19-45t19-45t45-19"></svg:path>`,
})
export class FluentMdl2CouponIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
