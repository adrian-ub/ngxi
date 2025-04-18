import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsTicketDuotoneLineIcon],svg[lets-icons-ticket-duotone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="letsIconsTicketDuotoneLine0"><svg:g fill="none"><svg:path stroke="silver" stroke-opacity=".25" d="M3.5 8.5a3 3 0 0 1 3-3h11a3 3 0 0 1 3 3v.25a.75.75 0 0 1-.75.75a2.25 2.25 0 0 0-2.25 2.25v.5a2.25 2.25 0 0 0 2.25 2.25a.75.75 0 0 1 .75.75v.25a3 3 0 0 1-3 3h-11a3 3 0 0 1-3-3v-.25a.75.75 0 0 1 .75-.75a2.25 2.25 0 0 0 2.25-2.25v-.5A2.25 2.25 0 0 0 4.25 9.5a.75.75 0 0 1-.75-.75z"></svg:path><svg:path stroke="#fff" d="m12.96 10.159l.403-.295l-.404.295a1 1 0 0 0 .495.36l1.545.507l-.952 1.317l.406.293l-.406-.293a1 1 0 0 0-.189.583l-.005 1.625l-1.547-.498l-.153.476l.153-.476a1 1 0 0 0-.612 0l-1.547.498l-.005-1.625a1 1 0 0 0-.19-.583l-.95-1.317l1.543-.507a1 1 0 0 0 .496-.36L12 8.847z"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h24v24H0z" mask="url(#letsIconsTicketDuotoneLine0)"></svg:path>`,
})
export class LetsIconsTicketDuotoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
