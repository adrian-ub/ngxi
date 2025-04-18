import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineMapFoldIcon],svg[streamline-map-fold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m4.83 12.5l-3.105.717A1 1 0 0 1 .5 12.243V2.295a1 1 0 0 1 .775-.974L4.83.5zm0 0l4.34 1v-12L4.83.5zm8.67-.795a1 1 0 0 1-.775.974L9.17 13.5v-12l3.105-.717a1 1 0 0 1 1.225.974z"></svg:path>`,
})
export class StreamlineMapFoldIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
