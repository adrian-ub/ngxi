import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBusinessCenterOutlineSharpIcon],svg[material-symbols-light-business-center-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 20V7h6V4h6v3h6v13zm7-13h4V5h-4zm10 7.5h-6V16h-4v-1.5H4V19h16zm-9 .5h2v-2h-2zm-7-1.5h6V12h4v1.5h6V8H4zm8 .5"></svg:path>`,
})
export class MaterialSymbolsLightBusinessCenterOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
