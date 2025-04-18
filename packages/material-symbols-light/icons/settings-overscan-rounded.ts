import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSettingsOverscanRoundedIcon],svg[material-symbols-light-settings-overscan-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.846 10.874q0-.141-.121-.194t-.221.047l-.981.98q-.13.125-.13.29t.13.295l.98.981q.1.1.222.05q.121-.05.121-.192zm6.285 4.28h-2.257q-.141 0-.194.121t.047.221l.98.981q.125.13.29.13t.295-.13l.981-.98q.1-.1.05-.222q-.05-.121-.192-.121m-.005-6.308q.141 0 .194-.121t-.047-.221l-.98-.981q-.124-.13-.29-.13t-.295.13l-.981.98q-.1.1-.05.222q.05.121.192.121zm4.028 2.023v2.257q0 .141.121.194t.221-.047l.981-.98q.13-.124.13-.29t-.13-.295l-.98-.981q-.1-.1-.222-.05q-.121.05-.121.192M4.616 19q-.691 0-1.153-.462T3 17.384V6.616q0-.691.463-1.153T4.615 5h14.77q.69 0 1.152.463T21 6.616v10.769q0 .69-.463 1.153T19.385 19z"></svg:path>`,
})
export class MaterialSymbolsLightSettingsOverscanRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
