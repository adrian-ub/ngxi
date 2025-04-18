import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightCropIcon],svg[material-symbols-light-crop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.5 22.5v-4H7.116q-.691 0-1.153-.462T5.5 16.884V6.5h-4v-1h4v-4h1v15.385q0 .23.192.423t.423.192H22.5v1h-4v4zm0-6V7.116q0-.231-.192-.424t-.424-.192H7.5v-1h9.385q.69 0 1.153.463t.462 1.153V16.5z"></svg:path>`,
})
export class MaterialSymbolsLightCropIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
