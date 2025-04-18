import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightStylusHighlighterOutlineSharpIcon],svg[material-symbols-light-stylus-highlighter-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.673 15.308V4h1.994l6.64 3.244v8.064zm1-1h6.635v-6.43L9.442 5h-.769zM5 20l.827-2.308h12.346L19 20zm3.673-5.692h6.635z"></svg:path>`,
})
export class MaterialSymbolsLightStylusHighlighterOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
