import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineQuotation2Icon],svg[streamline-quotation-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 4L1 7m2-3l.5 3m7.75 0l-.5 3m2.75-3l-.5 3"></svg:path>`,
})
export class StreamlineQuotation2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
