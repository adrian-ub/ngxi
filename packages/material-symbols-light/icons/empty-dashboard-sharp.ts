import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightEmptyDashboardSharpIcon],svg[material-symbols-light-empty-dashboard-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.308 17.692h5.038v-3.538H6.308zm0-4.846h5.038V6.308H6.308zm6.346 4.846h5.038v-6.538h-5.038zm0-7.846h5.038V6.308h-5.038zM4 20V4h16v3.77h1.539v1H20v2.73h1.539v1H20v2.73h1.539v1H20V20z"></svg:path>`,
})
export class MaterialSymbolsLightEmptyDashboardSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
