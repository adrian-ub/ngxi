import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsTabUnselectedIcon],svg[material-symbols-tab-unselected-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18h2zm-2-4v-2h2v2zm0-4v-2h2v2zm0-4V6q0-.825.588-1.412T4 4h2v2H4v2zm4 12v-2h2v2zM8 6V4h2v2zm2 14v-2h2v2zm2-10V4h8q.825 0 1.413.588T22 6v4zm2 10v-2h2v2zm4 0v-2h2v-2h2v2q0 .825-.587 1.413T20 20zm2-6v-2h2v2z"></svg:path>`,
})
export class MaterialSymbolsTabUnselectedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
