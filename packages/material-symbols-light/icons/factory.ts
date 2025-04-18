import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFactoryIcon],svg[material-symbols-light-factory-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21V10.648l5-2.129v1.962l5-2.02V11h8v10zm8.23-3.462h1.54v-3.076h-1.54zm-4 0h1.54v-3.076H7.23zm8 0h1.54v-3.076h-1.54zm5.647-7.423h-2.875l.889-6.346h1.225z"></svg:path>`,
})
export class MaterialSymbolsLightFactoryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
