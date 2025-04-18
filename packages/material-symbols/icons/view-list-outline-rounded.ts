import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsViewListOutlineRoundedIcon],svg[material-symbols-view-list-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 17V7q0-.825.588-1.412T5 5h14q.825 0 1.413.588T21 7v10q0 .825-.587 1.413T19 19H5q-.825 0-1.412-.587T3 17m2-8h2V7H5zm4 0h10V7H9zm0 4h10v-2H9zm0 4h10v-2H9zm-4 0h2v-2H5zm0-4h2v-2H5z"></svg:path>`,
})
export class MaterialSymbolsViewListOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
