import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageChartDownFillIcon],svg[mage-chart-down-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.46 13.06v7.08a1.59 1.59 0 0 1-1.59 1.58h-1.86a1.59 1.59 0 0 1-1.59-1.58v-7.08a1.59 1.59 0 0 1 1.59-1.59h1.87a1.59 1.59 0 0 1 1.58 1.59m-6.94-4.59v11.7a1.59 1.59 0 0 1-1.59 1.58h-1.87a1.59 1.59 0 0 1-1.59-1.58V8.47a1.59 1.59 0 0 1 1.59-1.59h1.87a1.59 1.59 0 0 1 1.59 1.59M7.58 3.84v16.33A1.58 1.58 0 0 1 6 21.75H4.12a1.58 1.58 0 0 1-1.58-1.58V3.84a1.59 1.59 0 0 1 1.58-1.59h1.89a1.59 1.59 0 0 1 1.57 1.59"></svg:path>`,
})
export class MageChartDownFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
