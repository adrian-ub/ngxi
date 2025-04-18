import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riRefundFillIcon],svg[ri-refund-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.005 7h-20V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1zm0 2v11a1 1 0 0 1-1 1h-18a1 1 0 0 1-1-1V9zm-11 5v-2.5l-4.5 4.5h10.5v-2z"></svg:path>`,
})
export class RiRefundFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
