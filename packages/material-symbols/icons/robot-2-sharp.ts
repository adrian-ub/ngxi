import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsRobot2SharpIcon],svg[material-symbols-robot-2-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 21v-7h16v7zm5-8q-2.075 0-3.537-1.463T4 8t1.463-3.537T9 3h6q2.075 0 3.538 1.463T20 8t-1.463 3.538T15 13zm0-4q.425 0 .713-.288T10 8t-.288-.712T9 7t-.712.288T8 8t.288.713T9 9m6 0q.425 0 .713-.288T16 8t-.288-.712T15 7t-.712.288T14 8t.288.713T15 9"></svg:path>`,
})
export class MaterialSymbolsRobot2SharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
