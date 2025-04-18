import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiSortableIcon],svg[oui-sortable-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 12.786V3.2L3.604 6.596a.5.5 0 0 1-.708-.707l3.536-3.535a1.5 1.5 0 0 1 2.121 0l3.536 3.535a.5.5 0 0 1-.707.707L8 3.214v9.557l3.382-3.382a.5.5 0 0 1 .707.707l-3.536 3.536a1.5 1.5 0 0 1-2.121 0l-3.536-3.536a.5.5 0 0 1 .708-.707z"></svg:path>`,
})
export class OuiSortableIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
