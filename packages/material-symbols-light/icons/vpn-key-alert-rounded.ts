import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightVpnKeyAlertRoundedIcon],svg[material-symbols-light-vpn-key-alert-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 13.23q.508 0 .87-.36t.36-.87t-.36-.87t-.87-.36t-.87.36t-.36.87t.36.87t.87.36M7 17q-2.083 0-3.542-1.457T2 12.005T3.458 8.46Q4.917 7 7 7q1.833 0 3.134 1.09q1.3 1.089 1.708 2.68h5.581q.343 0 .576.23t.232.571v4.813q0 .262-.177.439t-.438.177t-.439-.177t-.177-.438V13.23h-5.158q-.408 1.59-1.708 2.68T7 17m13.962.23q-.31 0-.52-.21q-.211-.209-.211-.52t.21-.52t.52-.21t.52.21q.211.209.211.52t-.21.52t-.52.21m-.001-2.922q-.213 0-.356-.144t-.144-.356V10.5q0-.213.145-.356t.356-.144t.356.144t.144.356v3.308q0 .212-.144.356t-.357.144"></svg:path>`,
})
export class MaterialSymbolsLightVpnKeyAlertRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
