import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignCouponIcon],svg[tdesign-coupon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 21H3V1.132l1.555 1.036l2.391 1.594l1.93-1.543l.624-.5l.625.5L12 3.72l1.875-1.5l.625-.5l.625.5l1.929 1.543l2.391-1.594L21 1.132V21zM5 4.87V19h14V4.87l-1.445.963l-.609.406l-.57-.457l-1.876-1.5l-1.875 1.5l-.625.5l-.625-.5l-1.875-1.5l-1.875 1.5l-.571.457l-.609-.406zM8 16H7v-2h10v2zm3-4h6v-2h-6zm-3-2H7v2.004h2.004V10z"></svg:path>`,
})
export class TdesignCouponIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
