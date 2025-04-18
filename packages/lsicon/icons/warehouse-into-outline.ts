import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconWarehouseIntoOutlineIcon],svg[lsicon-warehouse-into-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M11 12.5h3.5v-7L8 3.5l-6.5 2V8M1 11h8m0 0L7 9m2 2l-2 2"></svg:path>`,
})
export class LsiconWarehouseIntoOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
