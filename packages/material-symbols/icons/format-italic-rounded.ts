import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFormatItalicRoundedIcon],svg[material-symbols-format-italic-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.25 19q-.525 0-.888-.363T5 17.75t.363-.888t.887-.362H9l3-9H9.25q-.525 0-.888-.363T8 6.25t.363-.888T9.25 5h7.5q.525 0 .888.363T18 6.25t-.363.888t-.887.362H14.5l-3 9h2.25q.525 0 .888.363t.362.887t-.363.888t-.887.362z"></svg:path>`,
})
export class MaterialSymbolsFormatItalicRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
