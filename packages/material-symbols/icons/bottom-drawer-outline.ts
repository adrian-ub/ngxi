import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsBottomDrawerOutlineIcon],svg[material-symbols-bottom-drawer-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm0-8.45q.45-.275.963-.413T7 12h10q.525 0 1.038.138t.962.412V5H5zM5 19h14v-3q0-.825-.587-1.412T17 14H7q-.825 0-1.412.588T5 16zm0 0h14z"></svg:path>`,
})
export class MaterialSymbolsBottomDrawerOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
