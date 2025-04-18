import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFormatInkHighlighterIcon],svg[material-symbols-light-format-ink-highlighter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 24v-2h20v2zm8.696-15.02l4.016 4.022l-3.885 3.885q-.485.484-1.134.484t-1.133-.484l-.193-.193l-1.155 1.133h-2.77l2.535-2.529l-.154-.154q-.484-.485-.49-1.14t.479-1.139zm.708-.713l4.558-4.551q.484-.485 1.133-.485t1.134.485l1.754 1.748q.484.484.484 1.133q0 .65-.484 1.134l-4.558 4.558z"></svg:path>`,
})
export class MaterialSymbolsLightFormatInkHighlighterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
