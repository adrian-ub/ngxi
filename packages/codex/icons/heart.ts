import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codexHeartIcon],svg[codex-heart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M6.6 7.5c-1.325 1.325-1.4 3.1 0 4.8s5.6 5.6 5.6 5.6s4.3-3.9 5.6-5.6s1.325-3.475 0-4.8a3.394 3.394 0 0 0-4.8 0l-.8.8l-.8-.8a3.394 3.394 0 0 0-4.8 0Z"></svg:path>`,
})
export class CodexHeartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
