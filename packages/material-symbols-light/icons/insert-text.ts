import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightInsertTextIcon],svg[material-symbols-light-insert-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 16V9h-3V8h7v1h-3v7zm-9.115 5.616v-4.232H4V6.616H2.385V2.385h4.23V4h10.77V2.385h4.23v4.23H20v10.77h1.616v4.23h-4.232V20H6.616v1.616zM6.615 19h10.77v-1.616H19V6.616h-1.616V5H6.616v1.616H5v10.769h1.616z"></svg:path>`,
})
export class MaterialSymbolsLightInsertTextIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
