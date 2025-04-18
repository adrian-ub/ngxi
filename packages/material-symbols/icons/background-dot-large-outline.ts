import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsBackgroundDotLargeOutlineIcon],svg[material-symbols-background-dot-large-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 17q.625 0 1.063-.437T10 15.5t-.437-1.062T8.5 14t-1.062.438T7 15.5t.438 1.063T8.5 17m0-7q.625 0 1.063-.437T10 8.5t-.437-1.062T8.5 7t-1.062.438T7 8.5t.438 1.063T8.5 10m7 7q.625 0 1.063-.437T17 15.5t-.437-1.062T15.5 14t-1.062.438T14 15.5t.438 1.063T15.5 17m0-7q.625 0 1.063-.437T17 8.5t-.437-1.062T15.5 7t-1.062.438T14 8.5t.438 1.063T15.5 10M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm0-2h14V5H5zM5 5v14z"></svg:path>`,
})
export class MaterialSymbolsBackgroundDotLargeOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
