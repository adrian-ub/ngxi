import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTabletAndroidSharpIcon],svg[material-symbols-light-tablet-android-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 22V2h16v20zm6.23-2.346h3.54v-.77h-3.54zM5 16.538h14V5.5H5z"></svg:path>`,
})
export class MaterialSymbolsLightTabletAndroidSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
