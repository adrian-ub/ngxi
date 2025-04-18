import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siChatTextFillIcon],svg[si-chat-text-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16.475 16H19c1.663 0 3-1.338 3-3V6c0-1.662-1.337-3-3-3H5C3.338 3 2 4.338 2 6v7c0 1.662 1.338 3 3 3h2.513c.3 0 .587.137.774.375l2.925 3.65c.4.5 1.163.5 1.563 0l2.925-3.65a.99.99 0 0 1 .775-.375M7 8a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1m0 3a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1" clip-rule="evenodd"></svg:path>`,
})
export class SiChatTextFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
