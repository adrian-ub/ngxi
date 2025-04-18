import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsBentoIcon],svg[material-symbols-bento-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 11V5h4q.825 0 1.413.588T22 7v4zM4 19q-.825 0-1.412-.587T2 17V7q0-.825.588-1.412T4 5h10v14zm4-5.5q.625 0 1.063-.437T9.5 12t-.437-1.062T8 10.5t-1.062.438T6.5 12t.438 1.063T8 13.5m8 5.5v-6h6v4q0 .825-.587 1.413T20 19z"></svg:path>`,
})
export class MaterialSymbolsBentoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
