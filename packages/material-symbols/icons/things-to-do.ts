import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsThingsToDoIcon],svg[material-symbols-things-to-do-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 21v-2h4v-4H4v-2h2.1q.3-1.875 1.663-3.238T11 8.1V3h7v4h-5v1.1q1.875.3 3.238 1.663T17.9 13H20v2h-2v4h4v2zm6-2h3v-4H8zm5 0h3v-4h-3z"></svg:path>`,
})
export class MaterialSymbolsThingsToDoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
