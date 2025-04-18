import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSmartScreenOutlineSharpIcon],svg[material-symbols-light-smart-screen-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 18V6h20v12zm2.5-1V7H3v10zm1 0h13V7h-13zm14 0H21V7h-1.5zM4.5 7H3zm15 0H21zm-6.25 5.635q-.275 0-.455-.18t-.18-.455t.18-.455t.455-.18t.455.18t.18.455t-.18.455t-.455.18m-5 0q-.275 0-.455-.18T7.615 12t.18-.455t.455-.18t.455.18t.18.455t-.18.455t-.455.18m7.5 0q-.275 0-.455-.18t-.18-.455t.18-.455t.455-.18t.455.18t.18.455t-.18.455t-.455.18m-5 0q-.275 0-.455-.18t-.18-.455t.18-.455t.455-.18t.455.18t.18.455t-.18.455t-.455.18"></svg:path>`,
})
export class MaterialSymbolsLightSmartScreenOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
