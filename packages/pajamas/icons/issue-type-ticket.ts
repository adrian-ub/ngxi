import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pajamasIssueTypeTicketIcon],svg[pajamas-issue-type-ticket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m.879 10.879l.182.182l.878.878a1.5 1.5 0 0 1 2.121 2.122l.88.878l.181.182L6 16l1.06-1.06l7.88-7.88L16 6l-.879-.879l-.182-.182l-.878-.878a1.5 1.5 0 0 1-2.122-2.121l-.878-.88l-.182-.181L10 0L8.94 1.06L1.06 8.94L0 10zM3 10q-.403.002-.777.102L2.121 10l4.41-4.409l3.878 3.879L6 13.879l-.102-.102A3 3 0 0 0 3 10m8.47-1.591L13.879 6l-.102-.102a3 3 0 0 1-3.675-3.675L10 2.121l-2.409 2.41z" clip-rule="evenodd"></svg:path>`,
})
export class PajamasIssueTypeTicketIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
