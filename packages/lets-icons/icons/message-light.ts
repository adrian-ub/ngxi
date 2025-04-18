import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsMessageLightIcon],svg[lets-icons-message-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:rect width="16" height="12" x="4" y="6" rx="2"></svg:rect><svg:path d="m4 9l7.106 3.553a2 2 0 0 0 1.788 0L20 9"></svg:path></svg:g>`,
})
export class LetsIconsMessageLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
