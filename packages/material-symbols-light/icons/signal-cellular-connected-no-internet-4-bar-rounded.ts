import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSignalCellularConnectedNoInternet4BarRoundedIcon],svg[material-symbols-light-signal-cellular-connected-no-internet-4-bar-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.373 19.627L19.602 4.398q.385-.384.891-.177t.507.742v2.268h-.5q-1.202 0-2.043.841q-.842.842-.842 2.044V21H4.94q-.535 0-.74-.497t.174-.876m16.128 1.604q-.31 0-.521-.21q-.21-.21-.21-.52t.21-.521q.209-.21.52-.21t.52.21q.21.209.21.52t-.21.52q-.209.21-.52.21m-.5-3.96v-7.154q0-.213.144-.357t.357-.143t.356.143t.143.357v7.178q0 .195-.144.335t-.357.14t-.356-.143t-.143-.357"></svg:path>`,
})
export class MaterialSymbolsLightSignalCellularConnectedNoInternet4BarRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
