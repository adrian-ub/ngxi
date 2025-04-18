import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBubbleChartIcon],svg[material-symbols-light-bubble-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.312 20q-.927 0-1.581-.65q-.654-.649-.654-1.576t.65-1.582t1.576-.653t1.581.649q.655.649.655 1.577t-.65 1.581q-.65.654-1.577.654m2.188-7q-1.896 0-3.198-1.302T12 8.5t1.302-3.198T16.5 4t3.198 1.302T21 8.5t-1.302 3.198T16.5 13m-9.27 4.23q-1.332 0-2.281-.948T4 14t.949-2.282t2.282-.949t2.282.95t.949 2.281t-.95 2.282t-2.281.949"></svg:path>`,
})
export class MaterialSymbolsLightBubbleChartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
