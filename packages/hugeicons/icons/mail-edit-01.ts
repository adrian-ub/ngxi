import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMailEdit01Icon],svg[hugeicons-mail-edit-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m2 5.5l6.913 3.917c2.549 1.444 3.625 1.444 6.174 0L22 5.5"></svg:path><svg:path d="M21.995 10.028c-.065-3.067-.098-4.6-1.23-5.737c-1.131-1.136-2.706-1.175-5.857-1.254a115 115 0 0 0-5.805 0c-3.15.079-4.726.118-5.857 1.254s-1.165 2.67-1.23 5.737a69 69 0 0 0 0 2.953c.065 3.068.098 4.601 1.23 5.737s2.707 1.176 5.857 1.255q.702.017 1.402.027m10.347-6.56l.693.692a1.5 1.5 0 0 1 0 2.121l-3.628 3.696a2 2 0 0 1-1.047.551l-2.248.488a.5.5 0 0 1-.595-.593l.479-2.235c.074-.397.266-.762.551-1.047l3.674-3.674a1.5 1.5 0 0 1 2.121 0"></svg:path></svg:g>`,
})
export class HugeiconsMailEdit01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
