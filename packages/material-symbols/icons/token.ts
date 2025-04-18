import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsTokenIcon],svg[material-symbols-token-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.1 9.25L4.05 6.425L12 2l7.95 4.425L14.9 9.25q-.575-.6-1.325-.925T12 8t-1.575.325T9.1 9.25m1.9 12.2L3 17V8.125L8.125 11q-.075.25-.1.488T8 12q0 1.375.825 2.45T11 15.875zM12 14q-.825 0-1.412-.587T10 12t.588-1.412T12 10t1.413.588T14 12t-.587 1.413T12 14m1 7.45v-5.575q1.35-.35 2.175-1.425T16 12q0-.275-.025-.513t-.1-.487L21 8.125V17z"></svg:path>`,
})
export class MaterialSymbolsTokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
