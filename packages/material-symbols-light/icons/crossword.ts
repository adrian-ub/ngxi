import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightCrosswordIcon],svg[material-symbols-light-crossword-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.25 21v-5.48h5.48V21zM3 14.75V9.27h5.48v5.48zm6.25 0V9.27h5.48v5.48zm6.25 0V9.27H21v5.48zm0-6.25V3H21v5.5z"></svg:path>`,
})
export class MaterialSymbolsLightCrosswordIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
