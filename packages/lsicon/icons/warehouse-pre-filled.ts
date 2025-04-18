import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconWarehousePreFilledIcon],svg[lsicon-warehouse-pre-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.658 2.092a1 1 0 0 1 .684 0l5 1.818a1 1 0 0 1 .658.94V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4.85a1 1 0 0 1 .658-.94zM5 13h1v-2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2h1V7H5zm7 0V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v6H3V4.85l5-1.818l5 1.818V13z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconWarehousePreFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
