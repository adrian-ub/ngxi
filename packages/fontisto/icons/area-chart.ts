import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fontistoAreaChartIcon],svg[fontisto-area-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 22v2H0V0h2v22zM26 6l4 14H4v-9l7-9l9 9z"></svg:path>`,
})
export class FontistoAreaChartIcon {
  readonly viewBox = input("0 0 32 24")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
