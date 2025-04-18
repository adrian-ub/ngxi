import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsTopPanelCloseRoundedIcon],svg[material-symbols-top-panel-close-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.3 13.2l-2.45 2.45q-.25.25-.125.55t.475.3h5.6q.35 0 .475-.3t-.125-.55L12.7 13.2q-.3-.3-.7-.3t-.7.3M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm0-11v9h14v-9z"></svg:path>`,
})
export class MaterialSymbolsTopPanelCloseRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
