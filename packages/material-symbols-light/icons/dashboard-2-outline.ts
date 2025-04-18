import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightDashboard2OutlineIcon],svg[material-symbols-light-dashboard-2-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.192 19v-5.808H21V19zm-4-8.192V5H21v5.808zM3 19v-5.808h9.808V19zm0-8.192V5h5.808v5.808zm9.192-1H20V6h-7.808zM4 18h7.808v-3.808H4zm12.192 0H20v-3.808h-3.808zM4 9.808h3.808V6H4zm3.808 0"></svg:path>`,
})
export class MaterialSymbolsLightDashboard2OutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
