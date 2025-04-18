import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightStylusHighlighterSharpIcon],svg[material-symbols-light-stylus-highlighter-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.673 15.308V4h1.994l6.64 3.244v8.064zM5 20l.827-2.308h12.346L19 20z"></svg:path>`,
})
export class MaterialSymbolsLightStylusHighlighterSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
