import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsKeyboardOffOutlineSharpIcon],svg[material-symbols-keyboard-off-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.85 22.525L1.475 4.15L2.9 2.725L21.275 21.1zM8 16v-2h6.175l2 2zm-3-3v-2h2v2zm3 0v-2h2v2zm9 0v-2h2v2zM5 10V8h2v2zm9 0V8h2v2zm3 0V8h2v2zm3 7V7h-9.975l-2-2H22v14.025zM2 19V5h3.175l2 2H4v10h13.175l2 2zm9.025-11H13v1.975zM14 11h2v1.975zm1 1"></svg:path>`,
})
export class MaterialSymbolsKeyboardOffOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
