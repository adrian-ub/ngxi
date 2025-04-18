import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilChartIcon],svg[cil-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M124 136H36a20.023 20.023 0 0 0-20 20v320a20.023 20.023 0 0 0 20 20h88a20.023 20.023 0 0 0 20-20V156a20.023 20.023 0 0 0-20-20m-12 328H48V168h64Zm188-224h-88a20.023 20.023 0 0 0-20 20v216a20.023 20.023 0 0 0 20 20h88a20.023 20.023 0 0 0 20-20V260a20.023 20.023 0 0 0-20-20m-12 224h-64V272h64ZM476 16h-88a20.023 20.023 0 0 0-20 20v440a20.023 20.023 0 0 0 20 20h88a20.023 20.023 0 0 0 20-20V36a20.023 20.023 0 0 0-20-20m-12 448h-64V48h64Z"></svg:path>`,
})
export class CilChartIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
