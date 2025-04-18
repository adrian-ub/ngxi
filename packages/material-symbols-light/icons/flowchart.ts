import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFlowchartIcon],svg[material-symbols-light-flowchart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.27 19v-1.866H11.5V12.5H8.711v1.846H3V9.635h5.712V11.5H11.5V6.846h3.77V4.981H21v4.73h-5.73V7.847H12.5v8.289h2.77V14.29H21V19z"></svg:path>`,
})
export class MaterialSymbolsLightFlowchartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
