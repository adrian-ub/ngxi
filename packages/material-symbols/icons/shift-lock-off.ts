import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsShiftLockOffIcon],svg[material-symbols-shift-lock-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 22v-2h16v2zm4-4v-5H3l4.5-5.525l8.5 8.5V18zm7.85-5L8.775 5.925L12 2l9 11zm4.625 10.3L.675 3.5L2.1 2.075l19.8 19.8z"></svg:path>`,
})
export class MaterialSymbolsShiftLockOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
