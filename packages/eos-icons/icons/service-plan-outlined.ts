import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[eosIconsServicePlanOutlinedIcon],svg[eos-icons-service-plan-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 2h8v2h-8zm-4 0h2v2h-2zm4 4h8v2h-8zm-4 0h2v2h-2zm4 4h8v2h-8zm-4 0h2v2h-2z"></svg:path><svg:circle cx="5" cy="19" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M4 4h2v9H4z"></svg:path><svg:path fill="currentColor" d="M7 2H3a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1m0 19H3V3h4Z"></svg:path>`,
})
export class EosIconsServicePlanOutlinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
