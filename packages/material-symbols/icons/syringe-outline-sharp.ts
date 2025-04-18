import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSyringeOutlineSharpIcon],svg[material-symbols-syringe-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.625 6.875L3.2 5.475L6.625 2.05l1.4 1.425l-1 1L8.1 5.55l3.525-3.525L13.05 3.45l-1.4 1.375l8.775 8.775l-2.1 2.15l4.725 4.7H20.2l-3.3-3.3l-2.1 2.15L6 10.5l-1.375 1.35l-1.4-1.4L6.7 6.95L5.625 5.875zM7.4 9.1l7.375 7.375l2.825-2.85l-1.5-1.525l-2.125 2.1l-1.375-1.4l2.1-2.1l-1.5-1.5l-2.1 2.075l-1.4-1.4l2.075-2.1L10.25 6.25zm0 0l2.85-2.85z"></svg:path>`,
})
export class MaterialSymbolsSyringeOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
