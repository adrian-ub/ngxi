import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageChartIcon],svg[mage-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.3" d="M6.209 12.324H4.401c-.579 0-1.048.47-1.048 1.048v6.83c0 .578.47 1.048 1.048 1.048H6.21c.58 0 1.049-.47 1.049-1.049v-6.829a1.05 1.05 0 0 0-1.049-1.049m6.694-9.573h-1.808c-.58 0-1.049.47-1.049 1.049V20.2c0 .58.47 1.049 1.05 1.049h1.807c.58 0 1.049-.47 1.049-1.049V3.8c0-.58-.47-1.049-1.05-1.049m6.696 5.176H17.79c-.58 0-1.049.47-1.049 1.05V20.2c0 .58.47 1.049 1.049 1.049h1.808a1.05 1.05 0 0 0 1.049-1.049V8.976c0-.58-.47-1.049-1.05-1.049"></svg:path>`,
})
export class MageChartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
