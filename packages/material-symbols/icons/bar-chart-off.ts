import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsBarChartOffIcon],svg[material-symbols-bar-chart-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20V9h4v11zm6 0V10l4 4v6zm4-8.85l-4-4V4h4zm6 6l-4-4V13h4zm-.225 5.475l-18.4-18.4L2.8 2.8l18.4 18.4z"></svg:path>`,
})
export class MaterialSymbolsBarChartOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
