import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[f7BitcoinIcon],svg[f7-bitcoin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M28 44.411h-4V49.4h-5v-4.989h-1.305V44.4H13v-5h4.695V17H13v-5h6V7h5v5h4V7h5v5h-1.2c6.088 0 9.906 3.122 9.906 8.086c0 3.549-2.65 6.514-6.087 7.03v.18c4.402.337 7.637 3.549 7.637 7.839c0 5.52-4.017 9.043-10.546 9.265H33v5h-5zm-3.521-27.357v8.423h4.874c3.616 0 5.682-1.595 5.682-4.335c0-2.606-1.82-4.088-4.986-4.088zm0 22.303h5.84c3.908 0 6.019-1.662 6.019-4.761c0-3.033-2.179-4.65-6.177-4.65H24.48z"></svg:path>`,
})
export class F7BitcoinIcon {
  readonly viewBox = input("0 0 56 56")
  readonly width = input("1em")
  readonly height = input("1em")
}
