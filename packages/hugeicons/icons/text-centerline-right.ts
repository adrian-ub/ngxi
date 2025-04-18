import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTextCenterlineRightIcon],svg[hugeicons-text-centerline-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 3h18M3 21h18M15 9h6m-6 6h6m-17.414.414C4.172 16 5.114 16 7 16s2.828 0 3.414-.586S11 13.886 11 12s0-2.828-.586-3.414S8.886 8 7 8s-2.828 0-3.414.586S3 10.114 3 12s0 2.828.586 3.414" color="currentColor"></svg:path>`,
})
export class HugeiconsTextCenterlineRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
