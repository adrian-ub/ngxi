import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsTicketAltDuotoneLineIcon],svg[lets-icons-ticket-alt-duotone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="letsIconsTicketAltDuotoneLine0"><svg:g fill="none"><svg:path stroke="silver" stroke-opacity=".25" d="M17.5 19.005V4.995a.8.8 0 0 0-1.244-.666l-1.27.847a.8.8 0 0 1-.943-.041L12.5 3.9a.8.8 0 0 0-1 0L9.957 5.135a.8.8 0 0 1-.944.04l-1.27-.846a.8.8 0 0 0-1.243.666v14.01a.8.8 0 0 0 1.244.666l1.27-.846a.8.8 0 0 1 .943.04L11.5 20.1a.8.8 0 0 0 1 0l1.543-1.235a.8.8 0 0 1 .944-.04l1.27.846a.8.8 0 0 0 1.243-.666Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M9.5 9.5h5m-5 2.5h5m-5 2.5h5"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h24v24H0z" mask="url(#letsIconsTicketAltDuotoneLine0)"></svg:path>`,
})
export class LetsIconsTicketAltDuotoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
