import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsShiftLockOutlineIcon],svg[material-symbols-shift-lock-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 18v-5H3l9-11l9 11h-5v5zm2-2h4v-5h2.775L12 5.15L7.225 11H10zm-6 6v-2h16v2z"></svg:path>`,
})
export class MaterialSymbolsShiftLockOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
