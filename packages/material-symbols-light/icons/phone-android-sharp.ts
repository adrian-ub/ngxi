import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPhoneAndroidSharpIcon],svg[material-symbols-light-phone-android-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.23 19.654h3.54v-.77h-3.54zM6 22V2h12v20zm1-5.462h10V5.5H7z"></svg:path>`,
})
export class MaterialSymbolsLightPhoneAndroidSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
