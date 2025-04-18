import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconBatchCheckOutlineIcon],svg[lsicon-batch-check-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="m11.5 5.5l-3 3L7 7M2.5 4v9.5H12m-7.5-11h9v9h-9z"></svg:path>`,
})
export class LsiconBatchCheckOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
