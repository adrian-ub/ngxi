import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFormatLetterSpacingIcon],svg[material-symbols-light-format-letter-spacing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.5 21.02l-3.308-3.308L8.5 14.423l.714.708l-2.1 2.08h9.753l-2.075-2.08l.708-.708l3.289 3.289l-3.308 3.307l-.714-.707l2.1-2.1H7.114l2.075 2.1zM6 11.5V3h1v8.5zm5.5 0V3h1v8.5zm5.5 0V3h1v8.5z"></svg:path>`,
})
export class MaterialSymbolsLightFormatLetterSpacingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
