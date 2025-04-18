import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixChartDiagramIcon],svg[ix-chart-diagram-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M448 64v384H64V64zm-42.667 42.667H106.667v298.666h298.666zM298.666 266.666H192v-53.333h-42.667v-64H256v64h-42.667v32H320v53.334h42.667v64H256v-64h42.667z"></svg:path>`,
})
export class IxChartDiagramIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
