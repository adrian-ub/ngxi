import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsPanelLeftContractIcon],svg[proicons-panel-left-contract-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.75 7.25a3.5 3.5 0 0 1 3.5-3.5h9.5a3.5 3.5 0 0 1 3.5 3.5v9.5a3.5 3.5 0 0 1-3.5 3.5h-9.5a3.5 3.5 0 0 1-3.5-3.5zm5.797-3.5v16.5m5.213-6L12.55 12m0 0l2.21-2.25M12.55 12h4.7"></svg:path>`,
})
export class ProiconsPanelLeftContractIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
