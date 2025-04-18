import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSchemaOutlineIcon],svg[material-symbols-light-schema-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.885 22.116v-4.232H7v-3.768H4.884V9.885H7v-3.77H4.884v-4.23h5.232v4.23H8v3.77h2.116V11.5h4.769V9.884h5.23v4.232h-5.23V12.5h-4.77v1.616H8v3.769h2.116v4.23zm1-1h3.23v-2.231h-3.23zm0-8h3.23v-2.231h-3.23zm10 0h3.23v-2.231h-3.23zm-10-8h3.23V2.885h-3.23zM7.5 20"></svg:path>`,
})
export class MaterialSymbolsLightSchemaOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
