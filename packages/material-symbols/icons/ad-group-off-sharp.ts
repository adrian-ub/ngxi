import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsAdGroupOffSharpIcon],svg[material-symbols-ad-group-off-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.5 23.3L15.2 18H6V8.8L.7 3.5l1.4-1.4l19.8 19.8zM2 22V6h2v14h14v2zm18.7-4.125L8.825 6H20V4H8v1.175L6.125 3.3V2H22v15.875z"></svg:path>`,
})
export class MaterialSymbolsAdGroupOffSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
