import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconWarehouseOutlineIcon],svg[lsicon-warehouse-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M2.5 10.5h5V13M5 12v1.5m8.5-5H8a.5.5 0 0 0-.5.5v3.5m3-1.5v2M7.83 2.562l-5 1.818a.5.5 0 0 0-.33.47V13a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V4.85a.5.5 0 0 0-.33-.47l-5-1.818a.5.5 0 0 0-.34 0Z"></svg:path>`,
})
export class LsiconWarehouseOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
