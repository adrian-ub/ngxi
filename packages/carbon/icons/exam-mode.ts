import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonExamModeIcon],svg[carbon-exam-mode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M25 23v3H7v-9.17l3.59 3.58L12 19l-6-6l-6 6l1.41 1.41L5 16.83V26a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2v-3zm2-16v9.17l3.59-3.58L32 14l-6 6l-6-6l1.41-1.41L25 16.17V7H13V5h12a2 2 0 0 1 2 2M8 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2M4 4v4h4V4z"></svg:path>`,
})
export class CarbonExamModeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
