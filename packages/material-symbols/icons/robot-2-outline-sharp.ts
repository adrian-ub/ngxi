import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsRobot2OutlineSharpIcon],svg[material-symbols-robot-2-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 21v-7h16v7zm5-8q-2.075 0-3.537-1.463T4 8t1.463-3.537T9 3h6q2.075 0 3.538 1.463T20 8t-1.463 3.538T15 13zm-3 6h12v-3H6zm3-8h6q1.25 0 2.125-.875T18 8t-.875-2.125T15 5H9q-1.25 0-2.125.875T6 8t.875 2.125T9 11m0-2q.425 0 .713-.288T10 8t-.288-.712T9 7t-.712.288T8 8t.288.713T9 9m6 0q.425 0 .713-.288T16 8t-.288-.712T15 7t-.712.288T14 8t.288.713T15 9m-3-1"></svg:path>`,
})
export class MaterialSymbolsRobot2OutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
