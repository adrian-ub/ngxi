import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightShowChartIcon],svg[material-symbols-light-show-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3.5 17.808l-.73-.731l6.807-6.808l4 4l6.985-8l.707.67l-7.653 8.83l-4.039-4.038z"></svg:path>`,
})
export class MaterialSymbolsLightShowChartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
