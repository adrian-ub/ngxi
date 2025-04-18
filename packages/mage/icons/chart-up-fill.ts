import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageChartUpFillIcon],svg[mage-chart-up-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.58 13.06v7.08A1.58 1.58 0 0 1 6 21.72H4.12a1.58 1.58 0 0 1-1.58-1.58v-7.08a1.59 1.59 0 0 1 1.58-1.59H6a1.59 1.59 0 0 1 1.58 1.59m6.94-4.59v11.7a1.59 1.59 0 0 1-1.59 1.58h-1.87a1.59 1.59 0 0 1-1.59-1.58V8.47a1.59 1.59 0 0 1 1.59-1.59h1.87a1.59 1.59 0 0 1 1.59 1.59m6.94-4.63v16.33a1.59 1.59 0 0 1-1.59 1.58H18a1.59 1.59 0 0 1-1.59-1.58V3.84A1.59 1.59 0 0 1 18 2.25h1.87a1.59 1.59 0 0 1 1.59 1.59"></svg:path>`,
})
export class MageChartUpFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
