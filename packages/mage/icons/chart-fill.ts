import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageChartFillIcon],svg[mage-chart-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.755 13.38v6.83a1.54 1.54 0 0 1-1.54 1.54h-1.81a1.54 1.54 0 0 1-1.55-1.54v-6.83a1.54 1.54 0 0 1 1.55-1.55h1.81a1.54 1.54 0 0 1 1.54 1.55m6.7-9.58v16.41a1.54 1.54 0 0 1-1.55 1.54h-1.81a1.55 1.55 0 0 1-1.55-1.54V3.8a1.56 1.56 0 0 1 1.55-1.55h1.81a1.55 1.55 0 0 1 1.55 1.55m6.69 5.18v11.23a1.54 1.54 0 0 1-1.54 1.54h-1.81a1.54 1.54 0 0 1-1.55-1.54V8.98a1.55 1.55 0 0 1 1.55-1.55h1.85a1.55 1.55 0 0 1 1.5 1.55"></svg:path>`,
})
export class MageChartFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
