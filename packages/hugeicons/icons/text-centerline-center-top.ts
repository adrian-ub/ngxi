import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTextCenterlineCenterTopIcon],svg[hugeicons-text-centerline-center-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 3.5h2m14 0h2m-18 6h2m14 0h2m-18 6h18M3 21h18M8.586 10.414C9.172 11 10.114 11 12 11s2.828 0 3.414-.586S16 8.886 16 7s0-2.828-.586-3.414S13.886 3 12 3s-2.828 0-3.414.586S8 5.114 8 7s0 2.828.586 3.414" color="currentColor"></svg:path>`,
})
export class HugeiconsTextCenterlineCenterTopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
