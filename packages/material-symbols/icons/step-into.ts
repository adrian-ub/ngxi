import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStepIntoIcon],svg[material-symbols-step-into-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22q-1.25 0-2.125-.875T9 19t.875-2.125T12 16t2.125.875T15 19t-.875 2.125T12 22m0-8L7 9l1.4-1.4l2.6 2.575V2h2v8.175L15.575 7.6L17 9z"></svg:path>`,
})
export class MaterialSymbolsStepIntoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
