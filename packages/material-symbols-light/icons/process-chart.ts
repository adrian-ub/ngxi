import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightProcessChartIcon],svg[material-symbols-light-process-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3.646 17.777l-.896-.439L8.308 6.224l.896.438zm6.023 0l-.896-.438l5.558-11.116l.896.438zm6.023 0l-.896-.438l5.558-11.116l.896.439z"></svg:path>`,
})
export class MaterialSymbolsLightProcessChartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
