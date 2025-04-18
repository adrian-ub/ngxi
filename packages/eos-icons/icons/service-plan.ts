import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[eosIconsServicePlanIcon],svg[eos-icons-service-plan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 2H3a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1M5 21a2 2 0 1 1 2-2a2 2 0 0 1-2 2m2-9H3V3h4Z"></svg:path><svg:circle cx="5.01" cy="19.01" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M14 2h8v2.02h-8zm-4 0h2.01v2.02H10zm4 4h8v2.02h-8zm-4 0h2.01v2.02H10zm4 4h8v2.02h-8zm-4 0h2.01v2.02H10z"></svg:path>`,
})
export class EosIconsServicePlanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
