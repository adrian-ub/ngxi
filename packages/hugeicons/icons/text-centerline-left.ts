import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTextCenterlineLeftIcon],svg[hugeicons-text-centerline-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 3h18M3 21h18M3 9h6m-6 6h6m4.586.414C14.172 16 15.114 16 17 16s2.828 0 3.414-.586S21 13.886 21 12s0-2.828-.586-3.414S18.886 8 17 8s-2.828 0-3.414.586S13 10.114 13 12s0 2.828.586 3.414" color="currentColor"></svg:path>`,
})
export class HugeiconsTextCenterlineLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
