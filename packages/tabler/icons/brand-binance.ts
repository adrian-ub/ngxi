import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrandBinanceIcon],svg[tabler-brand-binance-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6 8l2 2l4-4l4 4l2-2l-6-6zm0 8l2-2l4 4l3.5-3.5l2 2L12 22zm14-6l2 2l-2 2l-2-2zM4 10l2 2l-2 2l-2-2zm8 0l2 2l-2 2l-2-2z"></svg:path>`,
})
export class TablerBrandBinanceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
