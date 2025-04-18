import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPositionBottomLeftRoundedIcon],svg[material-symbols-light-position-bottom-left-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.616 20q-.691 0-1.153-.462T4 18.384V5.616q0-.691.463-1.153T5.616 4h12.769q.69 0 1.153.463T20 5.616v12.769q0 .69-.462 1.153T18.384 20zm2-3.192h6q.413 0 .706-.294q.294-.293.294-.706t-.294-.707t-.706-.293h-6q-.414 0-.707.293t-.293.707t.293.706t.707.294"></svg:path>`,
})
export class MaterialSymbolsLightPositionBottomLeftRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
