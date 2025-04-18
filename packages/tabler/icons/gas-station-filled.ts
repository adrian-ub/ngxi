import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerGasStationFilledIcon],svg[tabler-gas-station-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21a1 1 0 0 1 0-2V6a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v4a3 3 0 0 1 3 3v3a.5.5 0 1 0 1 0v-6a2 2 0 0 1-2-2v-.585l-.707-.708a1 1 0 0 1-.083-1.32l.083-.094a1 1 0 0 1 1.414 0l3.003 3.002l.095.112l.028.04l.044.073l.052.11l.031.09l.02.076l.012.078L21 9v7a2.5 2.5 0 1 1-5 0v-3a1 1 0 0 0-1-1v7a1 1 0 0 1 0 2zm9-16H6a1 1 0 0 0-1 1v4h8V6a1 1 0 0 0-1-1"></svg:path>`,
})
export class TablerGasStationFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
