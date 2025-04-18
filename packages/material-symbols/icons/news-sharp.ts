import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsNewsSharpIcon],svg[material-symbols-news-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21V3h13l5 5v13zM15 5v4h4zM7 17h10v-2H7zm0-8h5V7H7zm0 4h10v-2H7z"></svg:path>`,
})
export class MaterialSymbolsNewsSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
