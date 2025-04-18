import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFormatLetterSpacingWideIcon],svg[material-symbols-light-format-letter-spacing-wide-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 19V5h1v14zm15 0V5h1v14zM7.773 17l3.673-9.923h1.05L16.227 17H15.15l-1.004-2.839H9.808L8.812 17zm2.362-3.712h3.692l-1.816-5.111h-.038z"></svg:path>`,
})
export class MaterialSymbolsLightFormatLetterSpacingWideIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
