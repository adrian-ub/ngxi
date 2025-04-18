import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignCommandIcon],svg[tdesign-command-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 4.5a2 2 0 0 1 2 2v2h-2a2 2 0 1 1 0-4m4 4v-2a4 4 0 1 0-4 4h2v3h-2a4 4 0 1 0 4 4v-2h3v2a4 4 0 1 0 4-4h-2v-3h2a4 4 0 1 0-4-4v2zm0 2h3v3h-3zm5-2v-2a2 2 0 1 1 2 2zm0 7h2a2 2 0 1 1-2 2zm-7 0v2a2 2 0 1 1-2-2z"></svg:path>`,
})
export class TdesignCommandIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
