import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineControllerIcon],svg[streamline-controller-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M4.4 7v2.31m1.156-1.154H3.245m-1.989-.963l-.412 3.71a2.283 2.283 0 0 0 4.311 1.272l.36-.718h2.97l.36.718a2.283 2.283 0 0 0 4.31-1.273l-.411-3.71a3 3 0 0 0-2.982-2.668H4.238a3 3 0 0 0-2.982 2.669"></svg:path><svg:path d="M7 4.524v-.98a1 1 0 0 1 1-1h1.466a1 1 0 0 0 1-1V.561m0 6.934a.248.248 0 0 1 0-.495m0 .495a.248.248 0 1 0 0-.495M8.733 8.733a.248.248 0 0 1 .495 0m-.495 0a.248.248 0 0 0 .495 0"></svg:path></svg:g>`,
})
export class StreamlineControllerIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
