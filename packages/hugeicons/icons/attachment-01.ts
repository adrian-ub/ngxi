import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsAttachment01Icon],svg[hugeicons-attachment-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.823 12L4.28 10.456a4.367 4.367 0 1 1 6.177-6.177l9.265 9.265a4.368 4.368 0 0 1-6.177 6.177l-3.474-3.475a2.73 2.73 0 0 1 3.86-3.86l1.93 1.93" color="currentColor"></svg:path>`,
})
export class HugeiconsAttachment01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
