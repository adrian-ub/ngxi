import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenWidget26Icon],svg[garden-widget-26-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h18m-1 14H5c-.5 0-1-.4-1-1V5c0-.5.4-1 1-1h16c.5 0 1 .4 1 1v16c0 .6-.4 1-1 1M9 18l3-3l-3-3m5 6h4"></svg:path>`,
})
export class GardenWidget26Icon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
