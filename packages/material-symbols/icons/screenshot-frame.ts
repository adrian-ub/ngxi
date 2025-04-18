import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsScreenshotFrameIcon],svg[material-symbols-screenshot-frame-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 7V4q0-.825.588-1.412T7 2h3v2H7v3zm2 15q-.825 0-1.412-.587T5 20v-3h2v3h3v2zM17 7V4h-3V2h3q.825 0 1.413.588T19 4v3zm-3 15v-2h3v-3h2v3q0 .825-.587 1.413T17 22z"></svg:path>`,
})
export class MaterialSymbolsScreenshotFrameIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
