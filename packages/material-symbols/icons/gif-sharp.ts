import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsGifSharpIcon],svg[material-symbols-gif-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 15V9H13v6zM5 15V9h5v1.5H6.5v3h2V12H10v3zm9.5 0V9H19v1.5h-3v1h2V13h-2v2z"></svg:path>`,
})
export class MaterialSymbolsGifSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
