import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFormatClearIcon],svg[material-symbols-light-format-clear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.546 9.966l-.94-.941l.788-1.904h-2.73L8.427 5.885h10.689v1.23h-5.358zm6.793 10.788l-7.973-7.993l-2.308 5.431H7.706l2.725-6.365l-7.377-7.358l.708-.707l16.284 16.284z"></svg:path>`,
})
export class MaterialSymbolsLightFormatClearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
