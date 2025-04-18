import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSpeed175Icon],svg[material-symbols-speed-1-75-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 17v-2h2v2zm9 0v-2h4v-2h-4V7h6v2h-4v2h2q.825 0 1.413.588T22 13v2q0 .825-.587 1.413T20 17zM4 17V9H2V7h4v10zm7 0l2-8H9V7h4.25q.725 0 1.238.538T15 8.8l-.05.45L13 17z"></svg:path>`,
})
export class MaterialSymbolsSpeed175Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
