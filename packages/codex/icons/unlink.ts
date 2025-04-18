import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codexUnlinkIcon],svg[codex-unlink-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M15.78 11.5s.273-.304.77-.828c.894-.943.92-2.424.028-3.37v0a2.404 2.404 0 0 0-3.45-.051L11.88 8.5m-3.635 3.888s-.273.304-.77.828c-.894.944-.92 2.425-.028 3.37v0c.93.987 2.49 1.01 3.449.052l1.25-1.25m5.634-.285l-1.183-.16a1 1 0 0 0-1.134.954l-.043 1.185m-9.03-8.05l1.194.035a1 1 0 0 0 1.027-1.07l-.084-1.183m3.587 5.386l-.414-.414"></svg:path>`,
})
export class CodexUnlinkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
