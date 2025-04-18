import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightInkHighlighterOutlineIcon],svg[material-symbols-light-ink-highlighter-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.6 13.692l-2.6-2.6l-4.884 4.885q-.174.173-.174.423t.174.423l1.753 1.754q.173.173.423.173t.424-.173zm-1.886-3.313l2.6 2.6l4.936-4.937q.173-.173.173-.442t-.173-.442l-1.716-1.716q-.172-.173-.442-.173t-.442.173zm-1.062-.354l4.015 4.016l-5.244 5.244q-.484.484-1.13.484q-.647 0-1.131-.484l-.204-.204l-1.15 1.15h-2.77l2.535-2.535l-.165-.165q-.485-.485-.485-1.131t.485-1.13zm0 0l5.31-5.31q.484-.484 1.13-.484q.647 0 1.131.485l1.754 1.753q.485.485.485 1.131t-.485 1.13l-5.31 5.31z"></svg:path>`,
})
export class MaterialSymbolsLightInkHighlighterOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
