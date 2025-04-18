import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSignalCellularConnectedNoInternet0BarRoundedIcon],svg[material-symbols-light-signal-cellular-connected-no-internet-0-bar-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.373 19.627L19.627 4.373q.379-.379.876-.171t.497.742v1.787q0 .212-.144.356t-.357.144t-.356-.144T20 6.731V5.42L5.421 20H17q.213 0 .356.144t.144.357t-.144.356T17 21H4.944q-.534 0-.742-.497t.171-.876m16.128 1.604q-.31 0-.521-.21q-.21-.21-.21-.52t.21-.521q.209-.21.52-.21t.52.21q.21.209.21.52t-.21.52q-.209.21-.52.21m-.5-3.96v-7.154q0-.213.144-.357t.357-.143t.356.143t.143.357v7.153q0 .213-.144.357t-.357.143t-.356-.143t-.143-.357"></svg:path>`,
})
export class MaterialSymbolsLightSignalCellularConnectedNoInternet0BarRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
