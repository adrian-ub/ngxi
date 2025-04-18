import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsGateIcon],svg[material-symbols-gate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 19V9q0-1.65 1.175-2.825T9 5h2v6H9v2h2v6zm8 0v-6h2v-2h-2V5h2q1.65 0 2.825 1.175T19 9v10zM2 17V7h2v10zm18 0V7h2v10z"></svg:path>`,
})
export class MaterialSymbolsGateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
