import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsBurstModeIcon],svg[material-symbols-burst-mode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 19V5h2v14zm4 0V5h2v14zm6 0q-.825 0-1.412-.587T9 17V7q0-.825.588-1.412T11 5h10q.825 0 1.413.588T23 7v10q0 .825-.587 1.413T21 19zm1-4h8l-2.6-3.5l-1.9 2.5l-1.4-1.85z"></svg:path>`,
})
export class MaterialSymbolsBurstModeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
