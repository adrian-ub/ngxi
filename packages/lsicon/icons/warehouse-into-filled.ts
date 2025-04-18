import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconWarehouseIntoFilledIcon],svg[lsicon-warehouse-into-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.853 3.022a.5.5 0 0 1 .294 0l6.5 2A.5.5 0 0 1 15 5.5v7a.5.5 0 0 1-.5.5H11v-1h3V5.87L8 4.022L2 5.87V8H1V5.5a.5.5 0 0 1 .353-.478zm-.5 5.624l2 2a.5.5 0 0 1 0 .708l-2 2l-.707-.708L7.793 11.5H1v-1h6.793L6.646 9.354z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconWarehouseIntoFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
