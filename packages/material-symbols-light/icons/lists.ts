import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightListsIcon],svg[material-symbols-light-lists-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 19v-2.077h2.077V19zm4.846 0v-2.077H21V19zM3 13.038v-2.077h2.077v2.077zm4.846 0v-2.077H21v2.078zM3 7.077V5h2.077v2.077zm4.846 0V5H21v2.077z"></svg:path>`,
})
export class MaterialSymbolsLightListsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
