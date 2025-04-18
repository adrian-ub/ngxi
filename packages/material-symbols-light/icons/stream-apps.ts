import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightStreamAppsIcon],svg[material-symbols-light-stream-apps-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.116 16.173V9.506q0-.354.232-.584t.575-.23h6.039q.343 0 .575.233t.232.575v4.385q0 .343-.232.575t-.575.232h-5.366zM7.616 22q-.667 0-1.141-.475T6 20.386V3.615q0-.666.475-1.14T7.615 2h8.77q.666 0 1.14.475T18 3.614v3.308h-1V5.5H7v13h10v-1.423h1v3.298q0 .68-.475 1.153q-.474.472-1.14.472z"></svg:path>`,
})
export class MaterialSymbolsLightStreamAppsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
