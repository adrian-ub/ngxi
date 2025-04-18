import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightDualScreenSharpIcon],svg[material-symbols-light-dual-screen-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 18.277V3l8 3.198v15.29zM15 18V4.842L10.392 3H19v15z"></svg:path>`,
})
export class MaterialSymbolsLightDualScreenSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
