import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStackIcon],svg[material-symbols-stack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 14v2H4q-.825 0-1.412-.587T2 14V4q0-.825.588-1.412T4 2h10q.825 0 1.413.588T16 4v2h-2V4H4v10zm4 8q-.825 0-1.412-.587T8 20V10q0-.825.588-1.412T10 8h10q.825 0 1.413.588T22 10v10q0 .825-.587 1.413T20 22z"></svg:path>`,
})
export class MaterialSymbolsStackIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
