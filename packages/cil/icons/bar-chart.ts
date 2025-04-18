import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilBarChartIcon],svg[cil-bar-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M136 416h88a24.03 24.03 0 0 0 24-24V184a24.03 24.03 0 0 0-24-24h-88a24.03 24.03 0 0 0-24 24v208a24.03 24.03 0 0 0 24 24m8-224h72v192h-72ZM424 16h-88a24.03 24.03 0 0 0-24 24v352a24.03 24.03 0 0 0 24 24h88a24.03 24.03 0 0 0 24-24V40a24.03 24.03 0 0 0-24-24m-8 368h-72V48h72Z"></svg:path><svg:path fill="currentColor" d="M48 16H16v480h480v-32H48z"></svg:path>`,
})
export class CilBarChartIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
