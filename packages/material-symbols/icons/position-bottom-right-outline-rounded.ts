import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsPositionBottomRightOutlineRoundedIcon],svg[material-symbols-position-bottom-right-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm0-2h14V5H5zM5 5v14zm5.5 12h6q.625 0 1.063-.437T18 15.5t-.437-1.062T16.5 14h-6q-.625 0-1.062.438T9 15.5t.438 1.063T10.5 17"></svg:path>`,
})
export class MaterialSymbolsPositionBottomRightOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
