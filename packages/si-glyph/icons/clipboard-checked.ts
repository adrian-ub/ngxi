import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphClipboardCheckedIcon],svg[si-glyph-clipboard-checked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M12.002 1.016v.937h3.014v13.089H3.971V1.953h2.982v-.906H3V16h13V1.016z"></svg:path><svg:path d="M10.95 1.5c0-.828-.652-1.5-1.459-1.5c-.808 0-1.46.672-1.46 1.5c0 .176.035.343.09.5h-.057v1h2.873V2h-.076c.054-.157.089-.324.089-.5m-1.981.516V.959h1.047v1.057zm3.062 2H6.969V3H5.03v11h8.951V3h-1.95zM7.453 8.127l.762-.762l1.414 1.414l2.088-2.09l.811.811l-2.851 2.852z"></svg:path></svg:g>`,
})
export class SiGlyphClipboardCheckedIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
