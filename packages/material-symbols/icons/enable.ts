import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEnableIcon],svg[material-symbols-enable-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12q0-3.3 1.925-5.937T9 2.45V4.6q-2.275.925-3.637 2.938T4 12q0 3.35 2.325 5.675T12 20t5.675-2.325T20 12q0-2.45-1.362-4.462T15 4.6V2.45q3.15.975 5.075 3.613T22 12q0 2.075-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-6l-5-5l1.4-1.4l2.6 2.575V2h2v10.175L15.6 9.6L17 11z"></svg:path>`,
})
export class MaterialSymbolsEnableIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
