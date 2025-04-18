import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsTerminalIcon],svg[ls-terminal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 614V94h680v520zm59-343l121-47v-27L59 149v30l86 31l-86 32zm132 35h119v-30H191z"></svg:path>`,
})
export class LsTerminalIcon {
  readonly viewBox = input("0 0 680 614")
  readonly width = input("1.11em")
  readonly height = input("1em")
}
