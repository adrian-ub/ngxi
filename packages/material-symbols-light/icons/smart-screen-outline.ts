import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSmartScreenOutlineIcon],svg[material-symbols-light-smart-screen-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.25 12.635q-.275 0-.455-.18t-.18-.455t.18-.455t.455-.18t.455.18t.18.455t-.18.455t-.455.18m-5 0q-.275 0-.455-.18T7.615 12t.18-.455t.455-.18t.455.18t.18.455t-.18.455t-.455.18m7.5 0q-.275 0-.455-.18t-.18-.455t.18-.455t.455-.18t.455.18t.18.455t-.18.455t-.455.18m-5 0q-.275 0-.455-.18t-.18-.455t.18-.455t.455-.18t.455.18t.18.455t-.18.455t-.455.18M3.616 18q-.691 0-1.153-.462T2 16.384V7.616q0-.691.463-1.153T3.616 6h16.769q.69 0 1.153.463T22 7.616v8.769q0 .69-.462 1.153T20.385 18zm.884-1V7h-.885q-.23 0-.423.192T3 7.616v8.769q0 .23.192.423t.423.192zm1 0h13V7h-13zm14 0h.885q.23 0 .423-.192t.192-.424V7.616q0-.231-.192-.424T20.385 7H19.5zM4.5 7H3zm15 0H21z"></svg:path>`,
})
export class MaterialSymbolsLightSmartScreenOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
