import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconPackingBoxOutlineIcon],svg[lsicon-packing-box-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M1.584 4.5L8 1.583L14.417 4.5m-12.833 0L8 7.417M1.584 4.5v6.417L8 14.417m0-7L14.417 4.5M8 7.417v7M14.417 4.5v6.417L8 14.417M11 3L5 6v7"></svg:path>`,
})
export class LsiconPackingBoxOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
