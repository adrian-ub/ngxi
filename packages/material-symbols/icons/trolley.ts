import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsTrolleyIcon],svg[material-symbols-trolley-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 17V5H2V3h4v12h15v2zm2 5q-.825 0-1.412-.587T4 20t.588-1.412T6 18t1.413.588T8 20t-.587 1.413T6 22m1-8V8h6v6zm7 0V8h6v6zm5 8q-.825 0-1.412-.587T17 20t.588-1.412T19 18t1.413.588T21 20t-.587 1.413T19 22"></svg:path>`,
})
export class MaterialSymbolsTrolleyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
