import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsViewCozyIcon],svg[material-symbols-view-cozy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 10.5q-.825 0-1.412-.587T3 8.5V5q0-.825.588-1.412T5 3h3.5q.825 0 1.413.588T10.5 5v3.5q0 .825-.587 1.413T8.5 10.5zM5 21q-.825 0-1.412-.587T3 19v-3.5q0-.825.588-1.412T5 13.5h3.5q.825 0 1.413.588T10.5 15.5V19q0 .825-.587 1.413T8.5 21zm10.5-10.5q-.825 0-1.412-.587T13.5 8.5V5q0-.825.588-1.412T15.5 3H19q.825 0 1.413.588T21 5v3.5q0 .825-.587 1.413T19 10.5zm0 10.5q-.825 0-1.412-.587T13.5 19v-3.5q0-.825.588-1.412T15.5 13.5H19q.825 0 1.413.588T21 15.5V19q0 .825-.587 1.413T19 21z"></svg:path>`,
})
export class MaterialSymbolsViewCozyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
