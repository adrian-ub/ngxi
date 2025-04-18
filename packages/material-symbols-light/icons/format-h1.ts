import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFormatH1Icon],svg[material-symbols-light-format-h1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 16.5v-9h1v4h5v-4h1v9h-1v-4H7v4zm11 0v-8h-2v-1h3v9z"></svg:path>`,
})
export class MaterialSymbolsLightFormatH1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
