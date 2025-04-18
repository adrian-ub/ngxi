import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsInkHighlighterOutlineSharpIcon],svg[material-symbols-ink-highlighter-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.6 14l-1.3-1.3l-1.3-1.3l-5 5L8.6 19zm-1.175-4.025l1.3 1.3l1.3 1.3L20 7.6L17.4 5zM1.5 21l3.15-3.15l-.75-.75v-1.4l6.425-6.425l5.4 5.4L9.3 21.1H7.9l-.75-.75l-.65.65zm8.825-11.725L17.4 2.2l5.4 5.4l-7.075 7.075z"></svg:path>`,
})
export class MaterialSymbolsInkHighlighterOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
