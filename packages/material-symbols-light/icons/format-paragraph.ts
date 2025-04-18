import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFormatParagraphIcon],svg[material-symbols-light-format-paragraph-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.346 18.923V13h-.192q-1.671 0-2.836-1.164Q6.154 10.67 6.154 9t1.164-2.835T10.154 5h6.423v1h-2v12.923h-1V6h-2.23v12.923z"></svg:path>`,
})
export class MaterialSymbolsLightFormatParagraphIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
