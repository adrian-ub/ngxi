import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[entypoSocialStumbleuponIcon],svg[entypo-social-stumbleupon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.051 8.059l1.365.66l2.059-.66V6.865C14.475 4.402 12.467 2.4 10 2.4S5.525 4.402 5.525 6.865v6.27a1.052 1.052 0 0 1-2.102 0V10.51H0v2.625a4.475 4.475 0 0 0 8.949 0v-6.27a1.052 1.052 0 0 1 2.103 0zm5.525 2.451v2.625a1.051 1.051 0 0 1-2.102 0v-2.678l-2.059.658l-1.365-.658v2.678a4.476 4.476 0 0 0 8.95 0V10.51z"></svg:path>`,
})
export class EntypoSocialStumbleuponIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
