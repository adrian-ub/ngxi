import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTimer01Icon],svg[hugeicons-timer-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M11.08 13.152L8 7l5.42 4.28c.77.608.774 1.767.008 2.38a1.547 1.547 0 0 1-2.347-.508"></svg:path><svg:path d="M5 4.82a10 10 0 0 0-3 7.157C2 17.513 6.477 22 12 22s10-4.487 10-10.023a10.02 10.02 0 0 0-8.013-9.824c-.836-.17-1.254-.254-1.62.047C12 2.5 12 2.987 12 3.96v1.002"></svg:path></svg:g>`,
})
export class HugeiconsTimer01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
