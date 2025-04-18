import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsExpansionPanelsOutlineRoundedIcon],svg[material-symbols-expansion-panels-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 15.15l-1.875-1.875q-.3-.3-.7-.3t-.7.3t-.3.713t.3.712l2.575 2.6q.3.3.7.3t.7-.3l2.6-2.6q.3-.3.3-.712t-.3-.713t-.712-.3t-.713.3zm0-6.3l1.875 1.875q.3.3.7.3t.7-.3t.3-.712t-.3-.713L12.7 6.7q-.3-.3-.7-.3t-.7.3L8.7 9.3q-.3.3-.287.7t.312.7t.713.3t.712-.3zM5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm0-2h14V5H5zM5 5v14z"></svg:path>`,
})
export class MaterialSymbolsExpansionPanelsOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
