import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsBatteryVert005SharpIcon],svg[material-symbols-battery-vert-005-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 19h6V6H9v13Zm-2 3V4h3V2h4v2h3v18H7Z"></svg:path>`,
})
export class MaterialSymbolsBatteryVert005SharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
