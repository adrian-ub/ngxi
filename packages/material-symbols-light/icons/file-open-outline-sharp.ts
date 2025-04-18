import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFileOpenOutlineSharpIcon],svg[material-symbols-light-file-open-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 21V3h9.5L19 7.5v7h-1V8h-4V4H6v16h9.5v1zm16.95.664l-3.45-3.45v2.955h-1V16.5h4.67v1h-2.982l3.45 3.45zM6 20V4z"></svg:path>`,
})
export class MaterialSymbolsLightFileOpenOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
