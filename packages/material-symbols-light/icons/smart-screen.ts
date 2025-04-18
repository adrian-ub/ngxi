import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSmartScreenIcon],svg[material-symbols-light-smart-screen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.616 18q-.691 0-1.153-.462T2 16.384V7.616q0-.691.463-1.153T3.616 6h16.769q.69 0 1.153.463T22 7.616v8.769q0 .69-.462 1.153T20.385 18zM5.5 17h13V7h-13zm7.75-4.365q-.275 0-.455-.18t-.18-.455t.18-.455t.455-.18t.455.18t.18.455t-.18.455t-.455.18m-5 0q-.275 0-.455-.18T7.615 12t.18-.455t.455-.18t.455.18t.18.455t-.18.455t-.455.18m7.5 0q-.275 0-.455-.18t-.18-.455t.18-.455t.455-.18t.455.18t.18.455t-.18.455t-.455.18m-5 0q-.275 0-.455-.18t-.18-.455t.18-.455t.455-.18t.455.18t.18.455t-.18.455t-.455.18"></svg:path>`,
})
export class MaterialSymbolsLightSmartScreenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
