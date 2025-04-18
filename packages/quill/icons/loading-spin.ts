import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[quillLoadingSpinIcon],svg[quill-loading-spin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M22.5 4.742A13 13 0 1 0 29 16"></svg:path>`,
})
export class QuillLoadingSpinIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
