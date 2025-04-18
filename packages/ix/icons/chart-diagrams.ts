import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixChartDiagramsIcon],svg[ix-chart-diagrams-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M448 128v320H128V128zm-42.667 42.667H170.667v234.666h234.666zM320 298.666h-85.333L234.666 256H192v-64h106.667v64H256v21.333h85.333V320H384v64H277.333v-64H320zM384 64v42.667H106.667V384H64V64z"></svg:path>`,
})
export class IxChartDiagramsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
