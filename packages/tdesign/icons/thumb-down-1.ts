import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignThumbDown1Icon],svg[tdesign-thumb-down-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.446 22.236l-1.716-.572a3.7 3.7 0 0 1-2.53-3.51V15.7H5.332a3 3 0 0 1-2.965-3.456l1.184-7.7A3 3 0 0 1 6.516 2H21v11.9h-3.85zm-1.09-2.472L15.85 11.9H19V4H6.515a1 1 0 0 0-.988.848l-1.185 7.7a1 1 0 0 0 .989 1.152H11.2v4.454a1.7 1.7 0 0 0 1.154 1.61"></svg:path>`,
})
export class TdesignThumbDown1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
