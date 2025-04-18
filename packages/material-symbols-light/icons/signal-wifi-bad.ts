import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSignalWifiBadIcon],svg[material-symbols-light-signal-wifi-bad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 19.577L1.423 9q2.183-1.964 4.91-2.982Q9.063 5 12 5t5.666 1.018Q20.394 7.037 22.577 9l-1.821 1.821q-.479-.179-.991-.268q-.513-.09-1.028-.09q-2.43 0-4.127 1.699q-1.698 1.697-1.698 4.127q0 .515.089 1.027t.268.992zm4.612-.5l-.689-.688l2.1-2.1l-2.1-2.1l.689-.689l2.1 2.1l2.1-2.1l.713.688l-2.1 2.1l2.075 2.1l-.688.689l-2.1-2.075z"></svg:path>`,
})
export class MaterialSymbolsLightSignalWifiBadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
