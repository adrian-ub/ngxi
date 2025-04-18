import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightNewsSharpIcon],svg[material-symbols-light-news-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20V4h11.577L20 8.423V20zM15 5v4h4zM7.5 16h9v-1h-9zm0-7H12V8H7.5zm0 3.5h9v-1h-9z"></svg:path>`,
})
export class MaterialSymbolsLightNewsSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
