import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsCombineColumnsSharpIcon],svg[material-symbols-combine-columns-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21V3h8v4.1q-1.75.35-2.875 1.725T7 12t1.125 3.175T11 16.9V21zm10 0v-4.1q1.75-.35 2.875-1.725T17 12t-1.125-3.175T13 7.1V3h8v18zm-2-6v-2H9v-2h2V9h2v2h2v2h-2v2z"></svg:path>`,
})
export class MaterialSymbolsCombineColumnsSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
