import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSdCardAlertOutlineSharpIcon],svg[material-symbols-sd-card-alert-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 17h2v-2h-2zm0-4h2V8h-2zm9 9H4V8l6-6h10zm-2-2V4h-7.15L6 8.85V20zm0 0V4z"></svg:path>`,
})
export class MaterialSymbolsSdCardAlertOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
