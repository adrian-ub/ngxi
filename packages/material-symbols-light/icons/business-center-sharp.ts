import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBusinessCenterSharpIcon],svg[material-symbols-light-business-center-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 20v-5.5h7V16h4v-1.5h7V20zm8-5v-2h2v2zm-8-1.5V7h6V4h6v3h6v6.5h-7V12h-4v1.5zM10 7h4V5h-4z"></svg:path>`,
})
export class MaterialSymbolsLightBusinessCenterSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
