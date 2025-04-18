import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsGateSharpIcon],svg[material-symbols-gate-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 17V7h2v10Zm18 0V7h2v10ZM5 19V9q0-1.65 1.175-2.825Q7.35 5 9 5h2v6H9v2h2v6Zm8 0v-6h2v-2h-2V5h2q1.65 0 2.825 1.175Q19 7.35 19 9v10Z"></svg:path>`,
})
export class MaterialSymbolsGateSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
