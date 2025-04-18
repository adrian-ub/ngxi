import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerDeviceCctvOffIcon],svg[tabler-device-cctv-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M7 7H4a1 1 0 0 1-1-1V4c0-.275.11-.523.29-.704M7 3h13a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-9m-.64 3.35a4 4 0 1 0 5.285 5.3"></svg:path><svg:path d="M19 7v7q0 .482-.064.947m-1.095 2.913A7 7 0 0 1 5 14V7m7 7h.01M3 3l18 18"></svg:path></svg:g>`,
})
export class TablerDeviceCctvOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
