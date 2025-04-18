import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsGateOutlineIcon],svg[material-symbols-gate-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 17V7h2v10zm3 2V9q0-1.65 1.175-2.825T9 5h6q1.65 0 2.825 1.175T19 9v10zm15-2V7h2v10zM7 17h4v-4H9v-2h2V7H9q-.825 0-1.412.588T7 9zm6 0h4V9q0-.825-.587-1.412T15 7h-2v4h2v2h-2z"></svg:path>`,
})
export class MaterialSymbolsGateOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
