import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsMagnifyFullscreenSharpIcon],svg[material-symbols-magnify-fullscreen-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 20V4h20v16zm12-6h2v-2h2v-2h-2V8h-2v2h-2v2h2z"></svg:path>`,
})
export class MaterialSymbolsMagnifyFullscreenSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
