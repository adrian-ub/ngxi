import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesPluginFeedbackSolidIcon],svg[bubbles-plugin-feedback-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path fill="currentColor" d="M6.6 20.3c.422.007.84.069 1.246.185l2.908.83c.428.123.872.185 1.317.185h3.908a4.8 4.8 0 0 0 4.776-4.32l.24-4.08a3.6 3.6 0 0 0-2.72-3.675l-1.164-.255a1.2 1.2 0 0 1-.911-1.164V5.3a1.8 1.8 0 1 0-3.6 0v1.243a6 6 0 0 1-6 6z"></svg:path><svg:path d="M3 10.7h3.6v10.8H3z"></svg:path></svg:g>`,
})
export class BubblesPluginFeedbackSolidIcon {
  readonly viewBox = input("0 0 24 25")
  readonly width = input("0.96em")
  readonly height = input("1em")
}
