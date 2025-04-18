import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWcSharpIcon],svg[material-symbols-wc-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 22v-7.5H4V7h7v7.5H9.5V22zm2-16q-.825 0-1.412-.587T5.5 4t.588-1.412T7.5 2t1.413.588T9.5 4t-.587 1.413T7.5 6M15 22v-6h-3l2.95-9h3.1L21 16h-3v6zm1.5-16q-.825 0-1.412-.587T14.5 4t.588-1.412T16.5 2t1.413.588T18.5 4t-.587 1.413T16.5 6"></svg:path>`,
})
export class MaterialSymbolsWcSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
