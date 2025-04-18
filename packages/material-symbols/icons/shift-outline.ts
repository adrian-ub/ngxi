import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsShiftOutlineIcon],svg[material-symbols-shift-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 21v-8H3l9-11l9 11h-5v8zm2-2h4v-8h2.775L12 5.15L7.225 11H10zm2-8"></svg:path>`,
})
export class MaterialSymbolsShiftOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
