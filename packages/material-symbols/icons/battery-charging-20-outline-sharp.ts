import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsBatteryCharging20OutlineSharpIcon],svg[material-symbols-battery-charging-20-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 22V4h3V2h4v2h3v18H7Zm2-2h6V6H9v14Zm0 0h6h-6Zm2.5-2l2.5-6h-1.5V8L10 14h1.5v4Z"></svg:path>`,
})
export class MaterialSymbolsBatteryCharging20OutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
