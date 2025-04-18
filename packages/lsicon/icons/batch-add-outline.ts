import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconBatchAddOutlineIcon],svg[lsicon-batch-add-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M2.5 4v9.5H12M11.5 7h-5M9 4.5v5m-4.5-7h9v9h-9z"></svg:path>`,
})
export class LsiconBatchAddOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
