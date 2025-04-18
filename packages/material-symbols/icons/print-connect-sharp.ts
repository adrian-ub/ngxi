import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsPrintConnectSharpIcon],svg[material-symbols-print-connect-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.95 20.175L15.1 17.35l1.425-1.4l1.425 1.4l3.525-3.525l1.425 1.4zM6 21v-4H2V8h20v3.75q-.675-.35-1.412-.55t-1.513-.2q-1.95 0-3.537 1.1T13.25 15H8v4h5.1q.175.55.425 1.05t.6.95zM6 7V3h12v4z"></svg:path>`,
})
export class MaterialSymbolsPrintConnectSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
