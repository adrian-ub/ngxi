import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLightChartHistogramIcon],svg[mdi-light-chart-histogram-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 4h1v9h3V7h5v4h4v4h4v6H3zm13 12v4h3v-4zm-4-4v8h3v-8zM8 8v12h3V8zm-4 6v6h3v-6z"></svg:path>`,
})
export class MdiLightChartHistogramIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
