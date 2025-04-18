import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFormatLetterSpacingIcon],svg[material-symbols-format-letter-spacing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8 22l-4-4l4-4l1.425 1.4l-1.6 1.6h8.35L14.6 15.4L16 14l4 4l-4 4l-1.425-1.4l1.6-1.6h-8.35L9.4 20.6zM5 12V2h2v10zm6 0V2h2v10zm6 0V2h2v10z"></svg:path>`,
})
export class MaterialSymbolsFormatLetterSpacingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
