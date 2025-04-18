import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorApprovalsApp16Icon],svg[fluent-color-approvals-app-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorApprovalsApp160)" fill-rule="evenodd" d="M8.571.236a.806.806 0 0 0-1.14 1.14l.73.728H8a6.448 6.448 0 1 0 6.449 6.448a.806.806 0 1 0-1.612 0a4.837 4.837 0 1 1-4.836-4.837h.248l-.818.818a.806.806 0 1 0 1.14 1.14l2.148-2.149a.806.806 0 0 0 0-1.14z" clip-rule="evenodd"></svg:path><svg:path fill="url(#fluentColorApprovalsApp161)" fill-rule="evenodd" d="M11.61 5.812a.806.806 0 0 1 0 1.14l-3.472 3.471a.806.806 0 0 1-1.14 0L5.696 9.121a.806.806 0 1 1 1.14-1.14l.732.733l2.902-2.902a.806.806 0 0 1 1.14 0" clip-rule="evenodd"></svg:path><svg:defs><svg:lineargradient id="fluentColorApprovalsApp160" x1="1.554" x2="5.941" y1="1.231" y2="17.422" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#0FAFFF"></svg:stop><svg:stop offset="1" stop-color="#0067BF"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorApprovalsApp161" x1="10.891" x2="4.999" y1="6.555" y2="9.484" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#42B870"></svg:stop><svg:stop offset="1" stop-color="#309C61"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorApprovalsApp16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
