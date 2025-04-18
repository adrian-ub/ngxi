import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsMessageAltIcon],svg[lets-icons-message-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="16" height="12" x="4" y="6" stroke="currentColor" stroke-width="2" rx="2"></svg:rect><svg:path fill="currentColor" d="M11.106 12.553L4 9v7a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9l-7.106 3.553a2 2 0 0 1-1.788 0"></svg:path></svg:g>`,
})
export class LetsIconsMessageAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
