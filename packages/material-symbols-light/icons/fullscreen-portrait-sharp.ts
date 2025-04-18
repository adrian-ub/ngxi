import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFullscreenPortraitSharpIcon],svg[material-symbols-light-fullscreen-portrait-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.385 17.616h7.23V6.385h-7.23zM19 21H5V3h14z"></svg:path>`,
})
export class MaterialSymbolsLightFullscreenPortraitSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
