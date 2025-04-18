import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fontistoBarChartIcon],svg[fontisto-bar-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 12v8H6v-8zm6-8v16h-4V4zm16 18v2H0V0h2v22zM22 8v12h-4V8zm6-6v18h-4V2z"></svg:path>`,
})
export class FontistoBarChartIcon {
  readonly viewBox = input("0 0 32 24")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
