import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesEmailActionSendOutlineIcon],svg[bubbles-email-action-send-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.311 20.06A1.5 1.5 0 0 1 12.75 19v-2.25H2.25a1.5 1.5 0 0 1-1.5-1.5v-6a1.5 1.5 0 0 1 1.5-1.5h10.5V5.5a1.5 1.5 0 0 1 2.561-1.061l6.75 6.879a1.5 1.5 0 0 1 0 2.12z"></svg:path>`,
})
export class BubblesEmailActionSendOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
