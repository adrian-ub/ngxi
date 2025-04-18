import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsBrokenImageRoundedIcon],svg[material-symbols-broken-image-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19v-6.6l2.3 2.3q.3.3.7.3t.7-.3l3.3-3.3l3.3 3.3q.3.3.7.3t.7-.3l3.3-3.3l3 3V19q0 .825-.587 1.413T19 21zM5 3h14q.825 0 1.413.588T21 5v6.575l-2.3-2.3q-.3-.3-.7-.3t-.7.3l-3.3 3.3l-3.3-3.3q-.3-.3-.7-.3t-.7.3l-3.3 3.3l-3-3V5q0-.825.588-1.412T5 3"></svg:path>`,
})
export class MaterialSymbolsBrokenImageRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
