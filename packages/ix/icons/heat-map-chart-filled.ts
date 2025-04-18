import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixHeatMapChartFilledIcon],svg[ix-heat-map-chart-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M64 64h149.333v149.333H64zm21.333 170.667H192v106.666H85.333zm256 0H234.667v106.666h106.666zM234.667 85.333h106.666V192H234.667zm213.333 320h-42.667V448H448zm-64-234.666h64v-64h-64zM106.667 384h64v64h-64zM320 384h-64v64h64zm64-128h64v64h-64z" clip-rule="evenodd"></svg:path>`,
})
export class IxHeatMapChartFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
