import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightCropSharpIcon],svg[material-symbols-light-crop-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.5 22.5v-4h-12v-12h-4v-1h4v-4h1v16h16v1h-4v4zm0-6v-10h-10v-1h11v11z"></svg:path>`,
})
export class MaterialSymbolsLightCropSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
