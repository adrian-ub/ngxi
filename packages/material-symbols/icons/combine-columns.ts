import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsCombineColumnsIcon],svg[material-symbols-combine-columns-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h4q.825 0 1.413.588T11 5v2.1q-1.75.35-2.875 1.725T7 12t1.125 3.175T11 16.9V19q0 .825-.587 1.413T9 21zm10 0q-.825 0-1.412-.587T13 19v-2.1q1.75-.35 2.875-1.725T17 12t-1.125-3.175T13 7.1V5q0-.825.588-1.413T15 3h4q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm-4-6v-2H9v-2h2V9h2v2h2v2h-2v2z"></svg:path>`,
})
export class MaterialSymbolsCombineColumnsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
