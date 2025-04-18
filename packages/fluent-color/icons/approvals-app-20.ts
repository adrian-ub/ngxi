import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorApprovalsApp20Icon],svg[fluent-color-approvals-app-20-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorApprovalsApp200)" d="M10.207 1.293a1 1 0 0 0-1.414 1.414l.303.304A7.5 7.5 0 1 0 17 10.5a1 1 0 1 0-2 0a5.5 5.5 0 1 1-5.93-5.483l-.277.276a1 1 0 0 0 1.414 1.414l2-2a1 1 0 0 0 0-1.414z"></svg:path><svg:path fill="url(#fluentColorApprovalsApp201)" fill-rule="evenodd" d="M13.707 7.293a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414 0l-1.5-1.5a1 1 0 0 1 1.414-1.414l.793.793l3.293-3.293a1 1 0 0 1 1.414 0" clip-rule="evenodd"></svg:path><svg:defs><svg:lineargradient id="fluentColorApprovalsApp200" x1="2" x2="6.861" y1="2.395" y2="20.809" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#0FAFFF"></svg:stop><svg:stop offset="1" stop-color="#0067BF"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorApprovalsApp201" x1="12.828" x2="6.04" y1="8.2" y2="11.575" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#42B870"></svg:stop><svg:stop offset="1" stop-color="#309C61"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorApprovalsApp20Icon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
