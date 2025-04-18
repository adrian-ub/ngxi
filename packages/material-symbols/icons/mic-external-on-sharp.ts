import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsMicExternalOnSharpIcon],svg[material-symbols-mic-external-on-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.8 7q-.375-.425-.587-.925T4 5q0-1.25.875-2.125T7 2t2.125.875T10 5q0 .575-.213 1.075T9.2 7zM6 22v-4H5L4 8h6L9 18H8v2h4V2h8v20h-2V4h-4v18z"></svg:path>`,
})
export class MaterialSymbolsMicExternalOnSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
