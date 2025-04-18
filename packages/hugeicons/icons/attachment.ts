import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsAttachmentIcon],svg[hugeicons-attachment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.5 12v1.5a7.5 7.5 0 0 1-15 0V8a5 5 0 0 1 10 0v5.5a2.5 2.5 0 0 1-5 0v-4" color="currentColor"></svg:path>`,
})
export class HugeiconsAttachmentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
