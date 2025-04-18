import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightStreamAppsSharpIcon],svg[material-symbols-light-stream-apps-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.116 16.173v-7.48h7.653v6h-6.173zM6 22V2h12v4.923h-1V5.5H7v13h10v-1.423h1V22z"></svg:path>`,
})
export class MaterialSymbolsLightStreamAppsSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
