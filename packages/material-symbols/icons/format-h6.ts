import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFormatH6Icon],svg[material-symbols-format-h6-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 17V7h2v4h4V7h2v10H9v-4H5v4zm12 0q-.825 0-1.412-.587T13 15V9q0-.825.588-1.412T15 7h6v2h-6v2h4q.825 0 1.413.588T21 13v2q0 .825-.587 1.413T19 17zm0-4v2h4v-2z"></svg:path>`,
})
export class MaterialSymbolsFormatH6Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
