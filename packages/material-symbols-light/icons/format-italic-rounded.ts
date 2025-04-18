import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFormatItalicRoundedIcon],svg[material-symbols-light-format-italic-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.346 18.25q-.234 0-.396-.162t-.161-.397t.161-.396t.396-.16h3.077l3.48-10.27H9.828q-.234 0-.396-.162t-.162-.397t.162-.395t.396-.161h7.192q.235 0 .396.162t.162.397t-.162.396q-.161.16-.396.16h-2.961l-3.481 10.27h2.962q.234 0 .395.162t.162.397t-.162.396t-.395.16z"></svg:path>`,
})
export class MaterialSymbolsLightFormatItalicRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
