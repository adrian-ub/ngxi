import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStyleOutlineSharpIcon],svg[material-symbols-style-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3.975 19.8l-2.7-1.1l2.7-5.85zm2-5.8l2.875 8H5.975zm5.25 8.6L5.375 6.55l11.35-4.15l5.85 16.05zm-.25-12.6q.425 0 .713-.288T11.975 9t-.287-.712T10.975 8t-.712.288T9.975 9t.288.713t.712.287m1.45 10l7.55-2.75L15.525 5l-7.55 2.75zM7.975 7.75L15.525 5z"></svg:path>`,
})
export class MaterialSymbolsStyleOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
