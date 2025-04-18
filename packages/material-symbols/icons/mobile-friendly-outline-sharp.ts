import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsMobileFriendlyOutlineSharpIcon],svg[material-symbols-mobile-friendly-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 23V1h14v6h-2V6H6v12h10v-1h2v6zm2-3v1h10v-1zM6 4h10V3H6zm0 0V3zm0 16v1zm8.95-4l-4.25-4.25l1.4-1.4l2.85 2.85l5.65-5.65l1.4 1.4z"></svg:path>`,
})
export class MaterialSymbolsMobileFriendlyOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
