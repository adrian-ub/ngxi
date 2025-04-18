import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFiberSmartRecordRoundedIcon],svg[material-symbols-light-fiber-smart-record-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 18q-2.502 0-4.251-1.749T3 12t1.749-4.251T9 6t4.251 1.749T15 12t-1.749 4.251T9 18m7.654-.244q-.268.084-.46-.057q-.194-.141-.194-.426q0-.16.101-.275t.26-.177q1.616-.442 2.627-1.78Q20 13.702 20 12t-1.012-3.04t-2.627-1.781q-.159-.062-.26-.187T16 6.708q0-.28.19-.414t.458-.05q1.929.533 3.14 2.128T21 12t-1.211 3.625t-3.135 2.13"></svg:path>`,
})
export class MaterialSymbolsLightFiberSmartRecordRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
