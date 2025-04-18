import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPhoneAndroidOutlineSharpIcon],svg[material-symbols-light-phone-android-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.23 19.654h3.54v-.77h-3.54zM6 22V2h12v20zm1-4.461V21h10v-3.462zm0-1h10V5.5H7zM7 4.5h10V3H7zm0 13.039V21zM7 4.5V3z"></svg:path>`,
})
export class MaterialSymbolsLightPhoneAndroidOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
