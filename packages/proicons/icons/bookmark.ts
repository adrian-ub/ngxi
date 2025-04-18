import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsBookmarkIcon],svg[proicons-bookmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" d="M4.75 20.113c0 .498.554.803.983.54l5.702-3.48a1.09 1.09 0 0 1 1.13 0l5.702 3.48a.644.644 0 0 0 .983-.54V6.25a3 3 0 0 0-3-3h-8.5a3 3 0 0 0-3 3z"></svg:path>`,
})
export class ProiconsBookmarkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
