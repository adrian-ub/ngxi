import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsAutoAwesomeMotionIcon],svg[material-symbols-auto-awesome-motion-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22q-.825 0-1.412-.587T10 20v-8q0-.825.588-1.412T12 10h8q.825 0 1.413.588T22 12v8q0 .825-.587 1.413T20 22zm-6-4V8q0-.825.588-1.412T8 6h10v2H8v10zm-4-4V4q0-.825.588-1.412T4 2h10v2H4v10z"></svg:path>`,
})
export class MaterialSymbolsAutoAwesomeMotionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
