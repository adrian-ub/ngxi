import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonPrinterFillIcon],svg[iconamoon-printer-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 2a1 1 0 0 0-1 1v3H4a1 1 0 0 0-1 1v9a3 3 0 0 0 3 3h1v2a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-2h1a3 3 0 0 0 3-3V7a1 1 0 0 0-1-1h-3V3a1 1 0 0 0-1-1zm0 12a1 1 0 0 0-1 1v2H6a1 1 0 0 1-1-1V8h14v8a1 1 0 0 1-1 1h-1v-2a1 1 0 0 0-1-1zm4-2a1 1 0 1 0 0-2H8a1 1 0 1 0 0 2z" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonPrinterFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
