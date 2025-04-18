import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightGridOnSharpIcon],svg[material-symbols-light-grid-on-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20h4.675v-4.656H4zm5.675 0h4.65v-4.656h-4.65zm5.65 0H20v-4.656h-4.675zM4 14.344h4.675V9.656H4zm5.675 0h4.65V9.656h-4.65zm5.65 0H20V9.656h-4.675zM4 8.656h4.675V4H4zm5.675 0h4.65V4h-4.65zm5.65 0H20V4h-4.675z"></svg:path>`,
})
export class MaterialSymbolsLightGridOnSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
