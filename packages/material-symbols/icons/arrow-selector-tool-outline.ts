import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsArrowSelectorToolOutlineIcon],svg[material-symbols-arrow-selector-tool-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 13.75L9.975 11h4.25L8 6.1zM13.775 22l-3.625-7.8L6 20V2l14 11h-7.1l3.6 7.725zm-3.8-11"></svg:path>`,
})
export class MaterialSymbolsArrowSelectorToolOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
