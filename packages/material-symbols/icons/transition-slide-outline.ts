import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsTransitionSlideOutlineIcon],svg[material-symbols-transition-slide-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 20q-.825 0-1.412-.587T1 18V6q0-.825.588-1.412T3 4h2q.825 0 1.413.588T7 6v12q0 .825-.587 1.413T5 20zm0-1.975h2V5.975H3zM11 20q-.825 0-1.412-.587T9 18V6q0-.825.588-1.412T11 4h10q.825 0 1.413.588T23 6v12q0 .825-.587 1.413T21 20zm0-1.975h10V5.975H11zm-6 0V5.975zm6 0V5.975z"></svg:path>`,
})
export class MaterialSymbolsTransitionSlideOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
