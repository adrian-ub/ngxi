import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laWarehouseIcon],svg[la-warehouse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4.906L3.625 10.063l-.625.28V27h26V10.344l-.625-.281zm0 2.188l11 4.593V25h-2V14H7v11H5V11.687zM9 16h14v9H9z"></svg:path>`,
})
export class LaWarehouseIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
