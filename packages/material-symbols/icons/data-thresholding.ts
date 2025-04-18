import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsDataThresholdingIcon],svg[material-symbols-data-thresholding-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm10.15-2h2.125L19 17.275V16h-.85zm-7.5-5l3.025-3l2 2l5.075-5.1l-1.4-1.4l-3.675 3.675l-2-2L6.25 12.6zM5 19h.85l3-3H6.725L5 17.725zm8.525 0l3-3H14.4l-3 3zM9.8 19l3-3h-2.125l-3 3z"></svg:path>`,
})
export class MaterialSymbolsDataThresholdingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
