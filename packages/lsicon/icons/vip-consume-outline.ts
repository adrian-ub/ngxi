import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconVipConsumeOutlineIcon],svg[lsicon-vip-consume-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="m4 6l4 4.5L12 6m0 6.5L10.5 11m1.5 1.5V9m0 3.5l1.5-1.5m-4 1l-.5.5l-1 1l-6.5-7l3.5-4h6l3.5 4l-1 1l-.5.5"></svg:path>`,
})
export class LsiconVipConsumeOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
