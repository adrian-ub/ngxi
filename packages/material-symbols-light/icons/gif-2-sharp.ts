import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightGif2SharpIcon],svg[material-symbols-light-gif-2-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 16.5v-9h6.77v1H4v7h4.904v-3H6.712v-1h3.192v5zm9.904 0v-9h1v9zm4 0v-9h6v1h-5v3h4v1h-4v4z"></svg:path>`,
})
export class MaterialSymbolsLightGif2SharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
