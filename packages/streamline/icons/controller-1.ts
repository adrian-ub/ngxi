import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineController1Icon],svg[streamline-controller-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round"><svg:path stroke-linecap="round" d="M4.4 5.02v2.31m1.156-1.155H3.245"></svg:path><svg:path d="m1.256 5.212l-.412 3.71a2.283 2.283 0 0 0 4.311 1.273l.36-.72h2.97l.36.72a2.283 2.283 0 0 0 4.31-1.273l-.411-3.71a3 3 0 0 0-2.982-2.669H4.238a3 3 0 0 0-2.982 2.669Z"></svg:path><svg:path stroke-linecap="round" d="M10.466 5.514a.248.248 0 0 1 0-.495m0 .495a.248.248 0 1 0 0-.495M8.733 6.752a.248.248 0 0 1 .495 0m-.495 0a.248.248 0 1 0 .495 0"></svg:path></svg:g>`,
})
export class StreamlineController1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
