import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightEdgesensorLowOutlineIcon],svg[material-symbols-light-edgesensor-low-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.808 13.5v-6h1v6zm15.384 3v-6h1v6zM8.423 21q-.69 0-1.153-.462t-.462-1.153V4.615q0-.69.462-1.152T8.423 3h7.154q.69 0 1.153.463t.462 1.153v14.769q0 .69-.462 1.153T15.577 21zm7.77-2.5H7.807v.885q0 .23.192.423t.423.192h7.154q.23 0 .423-.192t.192-.424zm-8.385-13h8.384v-.885q0-.23-.192-.423T15.577 4H8.423q-.23 0-.423.192t-.192.423zm0 0V4zm0 13V20zm0-1h8.384v-11H7.808z"></svg:path>`,
})
export class MaterialSymbolsLightEdgesensorLowOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
