import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsHistoryIcon],svg[proicons-history-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M4.281 14.385a8.25 8.25 0 1 0 .824-6.26l-.477.88m-.523-4.63v3.75a1 1 0 0 0 .523.88m4.227.12h-3.75a1 1 0 0 1-.477-.12"></svg:path><svg:path d="M12.25 8v4.25l3.685 2.117"></svg:path></svg:g>`,
})
export class ProiconsHistoryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
