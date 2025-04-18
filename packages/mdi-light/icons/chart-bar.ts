import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLightChartBarIcon],svg[mdi-light-chart-bar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4h1v16h2V10h4v10h2V6h4v14h2v-6h4v7H2zm16 11v5h2v-5zm-6-8v13h2V7zm-6 4v9h2v-9z"></svg:path>`,
})
export class MdiLightChartBarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
