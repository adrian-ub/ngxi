import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsBrokenImageIcon],svg[material-symbols-broken-image-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19v-6.6l3 3l4-4l4 4l4-4l3 3V19q0 .825-.587 1.413T19 21zM5 3h14q.825 0 1.413.588T21 5v6.575l-3-3l-4 4l-4-4l-4 4l-3-3V5q0-.825.588-1.412T5 3"></svg:path>`,
})
export class MaterialSymbolsBrokenImageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
