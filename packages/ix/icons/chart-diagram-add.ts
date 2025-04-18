import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixChartDiagramAddIcon],svg[ix-chart-diagram-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m426.667 64l-.001 234.666H384v-192H106.667V384h191.999v42.666H64V64zm0 256l-.001 64h64v42.667l-64-.001v64H384v-64h-64V384h64v-64zM256 149.333v64h-42.667v21.333h85.334l-.001 42.667h42.667v64H234.667v-64h42.666V256H192v-42.667h-42.667v-64z"></svg:path>`,
})
export class IxChartDiagramAddIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
