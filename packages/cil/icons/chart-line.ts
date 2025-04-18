import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilChartLineIcon],svg[cil-chart-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M376 160v32h65.372L252 381.373l-72-72L76.686 412.686l22.628 22.628L180 354.627l72 72l212-211.999V280h32V160z"></svg:path><svg:path fill="currentColor" d="M48 104H16v392h480v-32H48z"></svg:path>`,
})
export class CilChartLineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
