import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconProcessModeOutlineIcon],svg[lsicon-process-mode-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M9 1.5H3.5v13h9V5M9 1.5L12.5 5M9 1.5V5h3.5M5 8h6M5 5h2.5M5 11h6"></svg:path>`,
})
export class LsiconProcessModeOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
