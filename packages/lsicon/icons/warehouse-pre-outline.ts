import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconWarehousePreOutlineIcon],svg[lsicon-warehouse-pre-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M4.5 14V7a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 .5.5v7m-5 0v-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v3M7.83 2.562l-5 1.818a.5.5 0 0 0-.33.47V13a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V4.85a.5.5 0 0 0-.33-.47l-5-1.818a.5.5 0 0 0-.34 0Z"></svg:path>`,
})
export class LsiconWarehousePreOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
