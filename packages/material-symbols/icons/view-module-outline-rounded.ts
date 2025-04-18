import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsViewModuleOutlineRoundedIcon],svg[material-symbols-view-module-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.025 17V7q0-.825.588-1.412T5.025 5H19q.825 0 1.413.588T21 7v10q0 .825-.587 1.413T19 19H5.025q-.825 0-1.412-.587T3.025 17Zm12.65-6H19V7h-3.325v4Zm-5.325 0h3.325V7H10.35v4Zm-5.325 0H8.35V7H5.025v4Zm0 6H8.35v-4H5.025v4Zm5.325 0h3.325v-4H10.35v4Zm5.325 0H19v-4h-3.325v4Z"></svg:path>`,
})
export class MaterialSymbolsViewModuleOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
