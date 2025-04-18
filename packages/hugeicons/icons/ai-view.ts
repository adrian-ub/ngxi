import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsAiViewIcon],svg[hugeicons-ai-view-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M4.75 2.75L7 5v3M4.75 3.5a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5m14.5-.75L17 5v3m2.25-4.5a.75.75 0 1 1 0-1.5a.75.75 0 0 1 0 1.5M12 2.75V7m0-3.5A.75.75 0 1 0 12 2a.75.75 0 0 0 0 1.5M15 16a3 3 0 1 0-6 0a3 3 0 0 0 6 0"></svg:path><svg:path d="M12 10c6 0 10 6 10 6s-4 6-10 6s-10-6-10-6s4-6 10-6"></svg:path></svg:g>`,
})
export class HugeiconsAiViewIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
