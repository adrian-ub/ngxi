import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMBankingIcon],svg[arcticons-m-banking-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.828 14.259L11.039 24l9.789 9.741"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.366 33.741L18.578 24l9.788-9.741H13.289L3.5 24l9.789 9.741z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m28.366 33.741l10.019-9.989l-3.494-3.494l-10.02 10.019"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.366 33.741h6.345L44.5 24l-9.789-9.741l-12.93 12.929"></svg:path>`,
})
export class ArcticonsMBankingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
