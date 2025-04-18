import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsViewQuiltOutlineRoundedIcon],svg[material-symbols-view-quilt-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 17V7q0-.825.588-1.412T5 5h14q.825 0 1.413.588T21 7v10q0 .825-.587 1.413T19 19H5q-.825 0-1.412-.587T3 17Zm7.325-10v4H19V7h-8.675ZM19 13h-3.325v4H19v-4Zm-8.675 0v4h3.35v-4h-3.35ZM5 17h3.325V7H5v10Z"></svg:path>`,
})
export class MaterialSymbolsViewQuiltOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
