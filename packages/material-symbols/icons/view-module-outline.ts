import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsViewModuleOutlineIcon],svg[material-symbols-view-module-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.675 11H19V7h-3.325zm-5.35 0h3.325V7h-3.325zM5 11h3.325V7H5zm0 6h3.325v-4H5zm5.325 0h3.325v-4h-3.325zm5.35 0H19v-4h-3.325zM3 17V7q0-.825.588-1.412T5 5h14q.825 0 1.413.588T21 7v10q0 .825-.587 1.413T19 19H5q-.825 0-1.412-.587T3 17"></svg:path>`,
})
export class MaterialSymbolsViewModuleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
