import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsTamperDetectionOnOutlineSharpIcon],svg[material-symbols-tamper-detection-on-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 17v-2h2V3H4v3H2V1h16v6.5l4-4v11l-4-4V17zm-2 3H3.625L0 16.4L1.4 15L3 16.6V8.5h1.5V13h1V7H7v6h1V8h1.5v5h1V9H12zm4-17v12z"></svg:path>`,
})
export class MaterialSymbolsTamperDetectionOnOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
