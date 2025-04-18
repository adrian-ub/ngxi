import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsAddToHomeScreenIcon],svg[material-symbols-add-to-home-screen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 23q-.825 0-1.412-.587T6 21v-4h2v1h10V6H8v1H6V3q0-.825.588-1.412T8 1h10q.825 0 1.413.588T20 3v18q0 .825-.587 1.413T18 23zm-3.6-6L3 15.6L8.6 10H5V8h7v7h-2v-3.6z"></svg:path>`,
})
export class MaterialSymbolsAddToHomeScreenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
