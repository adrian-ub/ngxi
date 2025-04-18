import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCircleArrowDataTransferHorizontalIcon],svg[hugeicons-circle-arrow-data-transfer-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:path d="M16.5 10.286H8.566c-.646 0-.97 0-1.05-.177c-.08-.176.148-.384.605-.799L9.564 8M7.5 13.714h7.934c.646 0 .97 0 1.05.177c.08.176-.148.384-.605.799L14.436 16"></svg:path></svg:g>`,
})
export class HugeiconsCircleArrowDataTransferHorizontalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
