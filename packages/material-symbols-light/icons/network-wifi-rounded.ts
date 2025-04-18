import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightNetworkWifiRoundedIcon],svg[material-symbols-light-network-wifi-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.35 10.5q1.675-1.2 3.625-1.85T12 8t4.025.65t3.625 1.85l1.45-1.45q-1.975-1.5-4.3-2.275T12 6t-4.8.775T2.9 9.05zm6.917 8.344L2.256 9.833q-.165-.166-.239-.361q-.073-.196-.073-.391q0-.229.098-.438q.099-.209.295-.37q2.107-1.621 4.557-2.447T12 5t5.106.826t4.557 2.447q.196.162.295.37q.098.209.098.438q0 .202-.073.394q-.074.192-.239.358l-9.011 9.011q-.166.165-.348.239q-.183.073-.385.073t-.385-.073q-.182-.074-.348-.239"></svg:path>`,
})
export class MaterialSymbolsLightNetworkWifiRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
