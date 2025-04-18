import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidanceSignLanguageIcon],svg[guidance-sign-language-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M.5 24V6H1a3 3 0 0 1 3 3v4V3h.5a3 3 0 0 1 3 3v6.5h2a3 3 0 0 1 3 3v6h-2A2.5 2.5 0 0 0 8 24m1-8.5V19m0-1.75h3.5M23.5 0v18H23a3 3 0 0 1-3-3v-4v10h-.5a3 3 0 0 1-3-3v-6.5h-2a3 3 0 0 1-3-3v-6h2A2.5 2.5 0 0 0 16 0m-1 8.5V5m0 1.75h-3.5"></svg:path>`,
})
export class GuidanceSignLanguageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
