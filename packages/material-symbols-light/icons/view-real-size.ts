import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightViewRealSizeIcon],svg[material-symbols-light-view-real-size-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.827 16V9H6V8h2.827v8zm3.635 0v-1h1v1zM16 16V9h-1.808V8H17v8zm-4.538-3.5v-1h1v1z"></svg:path>`,
})
export class MaterialSymbolsLightViewRealSizeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
