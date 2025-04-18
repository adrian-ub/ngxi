import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsToolbarIcon],svg[material-symbols-toolbar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19v-9h18v9q0 .825-.587 1.413T19 21zM3 8V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v3z"></svg:path>`,
})
export class MaterialSymbolsToolbarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
