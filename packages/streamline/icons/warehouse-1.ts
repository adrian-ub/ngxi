import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineWarehouse1Icon],svg[streamline-warehouse-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M13.5 6.94a1 1 0 0 0-.32-.74L7 .5L.82 6.2a1 1 0 0 0-.32.74v5.56a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1z"></svg:path><svg:path d="M7.25 10.001h2.999s.25 0 .25.25v2.999s0 .25-.25.25H7.25s-.25 0-.25-.25v-2.999s0-.25.25-.25m-1.75-3.5h2.999s.25 0 .25.25V9.75s0 .25-.25.25H5.5s-.25 0-.25-.25V6.751s0-.25.25-.25m-1.749 3.5H6.75s.25 0 .25.25v2.999s0 .25-.25.25H3.751s-.25 0-.25-.25v-2.999s0-.25.25-.25"></svg:path></svg:g>`,
})
export class StreamlineWarehouse1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
