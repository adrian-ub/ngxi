import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsTrolleyOutlineIcon],svg[material-symbols-trolley-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 17V5H2V3h4v12h15v2zm2 5q-.825 0-1.412-.587T4 20t.588-1.412T6 18t1.413.588T8 20t-.587 1.413T6 22m1-8V8h6v6zm2-2h2v-2H9zm5 2V8h6v6zm2-2h2v-2h-2zm3 10q-.825 0-1.412-.587T17 20t.588-1.412T19 18t1.413.588T21 20t-.587 1.413T19 22M9 12h2zm7 0h2z"></svg:path>`,
})
export class MaterialSymbolsTrolleyOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
