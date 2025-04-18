import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqFloorLampIcon],svg[marketeq-floor-lamp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M20.833 43.75h8.334m-4.167 0V20.833z"></svg:path><svg:path stroke="#306CFE" d="M35.417 20.833a28.3 28.3 0 0 1-4.063-12.708a2.083 2.083 0 0 0-2.083-1.875h-8.563a2.083 2.083 0 0 0-2.083 1.875a28.3 28.3 0 0 1-4.042 12.708z"></svg:path></svg:g>`,
})
export class MarketeqFloorLampIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
