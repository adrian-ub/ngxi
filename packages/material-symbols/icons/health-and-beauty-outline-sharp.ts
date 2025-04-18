import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHealthAndBeautyOutlineSharpIcon],svg[material-symbols-health-and-beauty-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 22L1 11l5-3V2h4v6l5 3l-4 11zm11 0v-2h4v-2h-4v-2h4v-2h-4v-2h4v-2h-4V8h4V6h-4V4h7v18zm-9.6-2h3.2l2.95-8.15L9.45 10h-2.9l-3.1 1.85zM8 15"></svg:path>`,
})
export class MaterialSymbolsHealthAndBeautyOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
