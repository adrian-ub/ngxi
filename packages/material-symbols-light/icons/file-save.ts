import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFileSaveIcon],svg[material-symbols-light-file-save-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.5 23.5v-1h7v1zm3.5-3.212L14.712 17l.688-.688l2.1 2.1v-4.887h1v4.887l2.1-2.1l.688.688zM6.116 19.5q-.652 0-1.134-.482T4.5 17.884V4.116q0-.652.482-1.134T6.116 2.5H13L18.5 8v3.14h-6.384v8.36zm6.384-11h5l-5-5z"></svg:path>`,
})
export class MaterialSymbolsLightFileSaveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
