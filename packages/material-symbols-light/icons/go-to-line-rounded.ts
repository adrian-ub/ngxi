import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightGoToLineRoundedIcon],svg[material-symbols-light-go-to-line-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.002 7q-.416 0-.709-.291T11 6.002t.291-.709t.707-.293t.709.291t.293.707t-.291.709t-.707.293m0 12q-.416 0-.709-.291T11 18.002t.291-.709t.707-.293t.709.291t.293.707t-.291.709t-.707.293"></svg:path>`,
})
export class MaterialSymbolsLightGoToLineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
