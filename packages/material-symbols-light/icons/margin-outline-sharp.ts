import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightMarginOutlineSharpIcon],svg[material-symbols-light-margin-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20V4h16v16zm1-1h14V5H5zm0 0V5zM7.346 8.904V7.365h1.538v1.539zm3.885 0V7.365h1.538v1.539zm3.885 0V7.365h1.538v1.539zm-7.77 3.865v-1.538h1.539v1.538zm3.885 0v-1.538h1.538v1.538zm3.885 0v-1.538h1.538v1.538z"></svg:path>`,
})
export class MaterialSymbolsLightMarginOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
