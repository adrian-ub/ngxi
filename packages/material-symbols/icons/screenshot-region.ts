import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsScreenshotRegionIcon],svg[material-symbols-screenshot-region-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 22v-3h-3v-2h3v-3h2v3h3v2h-3v3zM5 19v-5h2v3h3v2zm0-9V5h5v2H7v3zm12 0V7h-3V5h5v5z"></svg:path>`,
})
export class MaterialSymbolsScreenshotRegionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
