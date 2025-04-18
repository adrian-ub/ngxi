import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightInkHighlighterMoveOutlineSharpIcon],svg[material-symbols-light-ink-highlighter-move-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.139 13.692l-1.3-1.3l-1.3-1.3L7.23 16.4l2.6 2.6zm-1.887-3.313l1.3 1.3l1.3 1.3L21.231 7.6L18.63 5zM4.577 20.23l2.535-2.535l-.731-.73v-1.132l5.81-5.809l4.015 4.016l-5.81 5.809h-1.13l-.77-.77l-1.15 1.15zm7.614-10.206l6.44-6.44L22.646 7.6l-6.44 6.44zM14.852 4H8V3h7.852zm-3.385 3.385H5v-1h7.467zm-3.384 3.384H2v-1h7.083z"></svg:path>`,
})
export class MaterialSymbolsLightInkHighlighterMoveOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
