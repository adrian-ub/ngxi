import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSweepOutlineIcon],svg[material-symbols-sweep-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 18v-2h6v2zm-3.95 0L.375 12.325L1.8 10.9l4.25 4.25L15.2 6l1.425 1.425zM14 14v-2h6v2zm4-4V8h6v2z"></svg:path>`,
})
export class MaterialSymbolsSweepOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
