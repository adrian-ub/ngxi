import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPointScanRoundedIcon],svg[material-symbols-light-point-scan-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 13.5q-.633 0-1.066-.434Q10.5 12.633 10.5 12t.434-1.066T12 10.5t1.066.434q.434.433.434 1.066t-.434 1.066T12 13.5m-.5-6v-3q0-.213.144-.356T12.001 4t.356.144t.143.356v3q0 .213-.144.356T11.999 8t-.356-.144T11.5 7.5m0 12v-3q0-.213.144-.356t.357-.144t.356.144t.143.356v3q0 .213-.144.356t-.357.144t-.356-.144t-.143-.356m5-8h3q.213 0 .356.144t.144.357t-.144.356t-.356.143h-3q-.213 0-.356-.144T16 11.999t.144-.356t.356-.143m-12 0h3q.213 0 .356.144t.144.357t-.144.356t-.356.143h-3q-.213 0-.356-.144T4 11.999t.144-.356t.356-.143"></svg:path>`,
})
export class MaterialSymbolsLightPointScanRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
