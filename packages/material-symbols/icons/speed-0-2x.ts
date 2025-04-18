import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSpeed02xIcon],svg[material-symbols-speed-0-2x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 17v-2h2v2zm3 0v-4q0-.825.588-1.412T8 11h2V9H6V7h4q.825 0 1.413.588T12 9v2q0 .825-.587 1.413T10 13H8v2h4v2zm7 0l3-5l-3-5h2l2 3.325L19 7h2l-3 5l3 5h-2l-2-3.325L15 17z"></svg:path>`,
})
export class MaterialSymbolsSpeed02xIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
