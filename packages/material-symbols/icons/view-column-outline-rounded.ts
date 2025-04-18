import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsViewColumnOutlineRoundedIcon],svg[material-symbols-view-column-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 17V7q0-.825.588-1.412T5 5h13.975q.825 0 1.413.588T20.975 7v10q0 .825-.587 1.413T18.975 19H5q-.825 0-1.412-.587T3 17Zm2 0h3.325V7H5v10Zm5.325 0h3.325V7h-3.325v10Zm5.325 0h3.325V7H15.65v10Z"></svg:path>`,
})
export class MaterialSymbolsViewColumnOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
