import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesAttachmentOutlineIcon],svg[bubbles-attachment-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.5 17V9.5c0-1.656.843-3 2.5-3s2.5 1.344 2.5 3V19c0 2.486-1.515 4.5-4 4.5s-4-2.014-4-4.5V6.5c0-3.314 2.187-6 5.5-6s5.5 2.686 5.5 6v9"></svg:path>`,
})
export class BubblesAttachmentOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
