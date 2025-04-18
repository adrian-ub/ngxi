import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsKeyboardTabRtlIcon],svg[material-symbols-keyboard-tab-rtl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 18H2V6h2zm8 0l-6-6l6-6l1.4 1.4L9.825 11H22v2H9.825l3.6 3.6z"></svg:path>`,
})
export class MaterialSymbolsKeyboardTabRtlIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
