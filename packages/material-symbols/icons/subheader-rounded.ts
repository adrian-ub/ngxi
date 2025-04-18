import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSubheaderRoundedIcon],svg[material-symbols-subheader-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm2.5-11h6q.625 0 1.063-.437T15 8.5t-.437-1.062T13.5 7h-6q-.625 0-1.062.438T6 8.5t.438 1.063T7.5 10"></svg:path>`,
})
export class MaterialSymbolsSubheaderRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
