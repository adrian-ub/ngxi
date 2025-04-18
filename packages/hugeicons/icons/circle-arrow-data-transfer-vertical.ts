import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCircleArrowDataTransferVerticalIcon],svg[hugeicons-circle-arrow-data-transfer-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:path d="M10.286 7.5v7.934c0 .646 0 .97-.177 1.05c-.176.08-.384-.148-.799-.605L8 14.436m5.714 2.064V8.566c0-.646 0-.97.177-1.05c.176-.08.384.148.799.605L16 9.564"></svg:path></svg:g>`,
})
export class HugeiconsCircleArrowDataTransferVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
