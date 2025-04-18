import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSubtitlesOffOutlineSharpIcon],svg[material-symbols-subtitles-off-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 20V4h2l2 2H4v12h11.15l-2-2H6v-2h5.15L.65 3.45l1.4-1.4l19.9 19.9l-1.4 1.4l-3.4-3.35zm18-2.85V6H8.85l-2-2H22v15.15zM14.85 12l-2-2H18v2zM6 12v-2h2v2zm3.575.425"></svg:path>`,
})
export class MaterialSymbolsSubtitlesOffOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
