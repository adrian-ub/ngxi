import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightMarginSharpIcon],svg[material-symbols-light-margin-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20V4h16v16zM7.346 8.904h1.538V7.365H7.346zm3.885 0h1.538V7.365h-1.538zm3.885 0h1.538V7.365h-1.538zm-7.77 3.865h1.539v-1.538H7.346zm3.885 0h1.538v-1.538h-1.538zm3.885 0h1.538v-1.538h-1.538z"></svg:path>`,
})
export class MaterialSymbolsLightMarginSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
