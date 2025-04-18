import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconToggleWarehouseXOutlineIcon],svg[lsicon-toggle-warehouse-x-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M11 12.5h3.5v-7L8 3.5l-6.5 2V8m3-1.5v6m0 0l-2-2m2 2l2-2m1.5-1l2-2m0 0l2 2m-2-2V12"></svg:path>`,
})
export class LsiconToggleWarehouseXOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
