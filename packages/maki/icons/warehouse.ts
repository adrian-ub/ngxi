import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiWarehouseIcon],svg[maki-warehouse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.5 5a.5.5 0 0 1-.22-.05L7.5 2L1.72 4.93A.514.514 0 0 1 1.28 4L7.5.92L13.72 4a.512.512 0 0 1-.22 1M5 10H2v3h3zm4 0H6v3h3zm4 0h-3v3h3zm-2-4H8v3h3zM7 6H4v3h3z"></svg:path>`,
})
export class MakiWarehouseIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
