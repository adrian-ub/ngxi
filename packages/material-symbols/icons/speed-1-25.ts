import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSpeed125Icon],svg[material-symbols-speed-1-25-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 17v-2h2v2zm10 0v-2h4v-2h-4V7h6v2h-4v2h2q.825 0 1.413.588T22.5 13v2q0 .825-.587 1.413T20.5 17zm-7 0v-4q0-.825.588-1.412T11.5 11h2V9h-4V7h4q.825 0 1.413.588T15.5 9v2q0 .825-.587 1.413T13.5 13h-2v2h4v2zm-6 0V9h-2V7h4v10z"></svg:path>`,
})
export class MaterialSymbolsSpeed125Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
