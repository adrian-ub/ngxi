import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFormatColorTextIcon],svg[material-symbols-light-format-color-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 24v-3.462h18V24zm3.23-7l5.29-13h.96l5.29 13h-1.21l-1.442-3.638H8.816L7.36 17zm2.94-4.6h5.584L12.05 5.6h-.138z"></svg:path>`,
})
export class MaterialSymbolsLightFormatColorTextIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
