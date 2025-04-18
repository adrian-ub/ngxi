import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPrintConnectIcon],svg[material-symbols-light-print-connect-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 20v-4H3.577v-5.384q0-.852.577-1.426t1.423-.574h12.846q.852 0 1.426.574t.574 1.426v.807q-.31-.1-.643-.165q-.334-.066-.666-.066q-1.7 0-3.115.88q-1.414.878-2.172 2.39H8V19h5.466q.078.28.203.521q.125.24.264.479zM7 7.846v-3.23h10v3.23zm10.95 11.618l-2.138-2.114l.713-.708l1.425 1.42l3.525-3.525l.713.688z"></svg:path>`,
})
export class MaterialSymbolsLightPrintConnectIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
