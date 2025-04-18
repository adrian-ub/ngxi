import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsNewWindowIcon],svg[material-symbols-new-window-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h6v2H5v14h14v-6h2v6q0 .825-.587 1.413T19 21zm11-10V8h-3V6h3V3h2v3h3v2h-3v3z"></svg:path>`,
})
export class MaterialSymbolsNewWindowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
