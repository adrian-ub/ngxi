import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsMobileHandLeftIcon],svg[material-symbols-mobile-hand-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.6 22l5.1-6.125l-1.65-1.675q-.75-.75-1.8-.9t-2 .325l-1.25.65V6H7V4q0-.825.588-1.412T9 2h9q.825 0 1.413.588T20 4v16q0 .825-.587 1.413T18 22zM7 22q-1.25 0-2.125-.875T4 19v-8q0-1.25.875-2.125T7 8h1v9.5l4.15-2.075q.375-.2.788-.137t.687.337L14 16l-4.4 5.275q-.275.35-.687.538T8.05 22zm6.5-15q.425 0 .713-.288T14.5 6t-.288-.712T13.5 5t-.712.288T12.5 6t.288.713T13.5 7"></svg:path>`,
})
export class MaterialSymbolsMobileHandLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
