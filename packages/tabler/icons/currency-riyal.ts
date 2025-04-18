import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCurrencyRiyalIcon],svg[tabler-currency-riyal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 9v2a2 2 0 1 1-4 0v-1v1a2 2 0 1 1-4 0v-1v4a2 2 0 1 1-4 0v-2m15 .01V12m4-2v1a5 5 0 0 1-5 5"></svg:path>`,
})
export class TablerCurrencyRiyalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
