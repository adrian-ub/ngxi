import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorApprovalsApp24Icon],svg[fluent-color-approvals-app-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorApprovalsApp240)" d="M12.744 2.293a1 1 0 1 0-1.414 1.414l.689.689a8.787 8.787 0 1 0 8.805 8.787a1 1 0 1 0-2 0a6.787 6.787 0 1 1-6.805-6.787l-.69.689a1 1 0 0 0 1.415 1.414l2.396-2.396a1 1 0 0 0 0-1.414z"></svg:path><svg:path fill="url(#fluentColorApprovalsApp241)" fill-rule="evenodd" d="M16.937 9.48a1 1 0 0 1 0 1.415l-4.792 4.792a1 1 0 0 1-1.414 0L8.934 13.89a1 1 0 1 1 1.414-1.414l1.09 1.09l4.085-4.085a1 1 0 0 1 1.414 0" clip-rule="evenodd"></svg:path><svg:defs><svg:lineargradient id="fluentColorApprovalsApp240" x1="3.25" x2="9.247" y1="3.175" y2="25.271" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#0FAFFF"></svg:stop><svg:stop offset="1" stop-color="#0067BF"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorApprovalsApp241" x1="16.024" x2="7.892" y1="10.428" y2="14.47" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#42B870"></svg:stop><svg:stop offset="1" stop-color="#309C61"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorApprovalsApp24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
