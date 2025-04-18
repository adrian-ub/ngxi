import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFormatLetterSpacingWideIcon],svg[material-symbols-format-letter-spacing-wide-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 20V4h2v16zm16 0V4h2v16zM7.35 17L11.1 7h1.8l3.75 10H14.9l-.85-2.55H10L9.1 17zm3.15-4h3l-1.45-4.15z"></svg:path>`,
})
export class MaterialSymbolsFormatLetterSpacingWideIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
