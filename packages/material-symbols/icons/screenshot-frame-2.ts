import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsScreenshotFrame2Icon],svg[material-symbols-screenshot-frame-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 10V7h-3V5h3q.825 0 1.413.588T22 7v3zM2 10V7q0-.825.588-1.412T4 5h3v2H4v3zm15 9v-2h3v-3h2v3q0 .825-.587 1.413T20 19zM4 19q-.825 0-1.412-.587T2 17v-3h2v3h3v2z"></svg:path>`,
})
export class MaterialSymbolsScreenshotFrame2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
