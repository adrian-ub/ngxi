import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconOutOfWarehouseFilledIcon],svg[lsicon-out-of-warehouse-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.853 3.022a.5.5 0 0 1 .294 0l6.5 2A.5.5 0 0 1 15 5.5v7a.5.5 0 0 1-.5.5H11v-1h3V5.87L8 4.022L2 5.87V8H1V5.5a.5.5 0 0 1 .353-.478zM2.707 11.5l1.147 1.146l-.708.708l-2-2a.5.5 0 0 1 0-.708l2-2l.708.708L2.707 10.5H9.5v1z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconOutOfWarehouseFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
