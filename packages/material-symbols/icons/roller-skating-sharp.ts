import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsRollerSkatingSharpIcon],svg[material-symbols-roller-skating-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 16V1h8v3H9v1h3v.5q0 .125.013.25t.037.25H9v1h3.4q.35.575.888.975t1.187.6L20 10.1V16zm1 7q-1.25 0-2.125-.875T2 20t.875-2.125T5 17t2.125.875T8 20t-.875 2.125T5 23m14 0q-1.25 0-2.125-.875T16 20t.875-2.125T19 17t2.125.875T22 20t-.875 2.125T19 23m-7 0q-1.25 0-2.125-.875T9 20t.875-2.125T12 17t2.125.875T15 20t-.875 2.125T12 23"></svg:path>`,
})
export class MaterialSymbolsRollerSkatingSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
