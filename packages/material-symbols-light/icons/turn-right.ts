import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTurnRightIcon],svg[material-symbols-light-turn-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.48 19v-7.884q0-.672.473-1.144q.472-.472 1.143-.472h8.989l-2.1-2.1l.707-.708L20 10l-3.308 3.308l-.707-.708l2.1-2.1H9.096q-.269 0-.442.173t-.173.443V19z"></svg:path>`,
})
export class MaterialSymbolsLightTurnRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
