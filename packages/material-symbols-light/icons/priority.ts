import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPriorityIcon],svg[material-symbols-light-priority-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 20q-2.083 0-3.542-1.458Q4 17.083 4 15V9q0-2.083 1.458-3.542Q6.917 4 9 4h6q2.083 0 3.542 1.458Q20 6.917 20 9v6q0 2.083-1.458 3.542Q17.083 20 15 20zm2-4.692L16.308 10l-.708-.708l-4.6 4.6l-2.2-2.2l-.708.708z"></svg:path>`,
})
export class MaterialSymbolsLightPriorityIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
