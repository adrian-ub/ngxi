import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightStackOffOutlineSharpIcon],svg[material-symbols-light-stack-off-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21 18.189l-1-1V10h-7.188l-1-1H21zM14 6.616V4H6.812l-1-1H15v3.616zM10 20h8.573L10 11.427zm10.287 1.714L19.573 21H9V10.427l-5-5V14h2.616v1H3V4.427l-.713-.713L3 3l18 18zm-6-6"></svg:path>`,
})
export class MaterialSymbolsLightStackOffOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
