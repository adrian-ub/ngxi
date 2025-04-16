import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsRazorpayIcon],svg[simple-icons-razorpay-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m22.436 0l-11.91 7.773l-1.174 4.276l6.625-4.297L11.65 24h4.391zM14.26 10.098L3.389 17.166L1.564 24h9.008z"></svg:path>`,
})
export class SimpleIconsRazorpayIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
