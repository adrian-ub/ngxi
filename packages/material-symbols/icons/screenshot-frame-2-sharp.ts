import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsScreenshotFrame2SharpIcon],svg[material-symbols-screenshot-frame-2-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 10V7h-3V5h5v5zM2 10V5h5v2H4v3zm15 9v-2h3v-3h2v5zM2 19v-5h2v3h3v2z"></svg:path>`,
})
export class MaterialSymbolsScreenshotFrame2SharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
