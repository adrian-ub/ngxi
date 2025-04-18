import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTurnLeftIcon],svg[material-symbols-light-turn-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.52 19v-7.884q0-.27-.174-.443q-.173-.173-.442-.173H5.916l2.1 2.1l-.708.708L4 10l3.308-3.308l.708.708l-2.1 2.1h8.988q.671 0 1.143.472t.472 1.144V19z"></svg:path>`,
})
export class MaterialSymbolsLightTurnLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
