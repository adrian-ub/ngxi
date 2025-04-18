import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsJobLinkIcon],svg[hugeicons-job-link-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M11.007 21.5H9.605c-3.585 0-5.377 0-6.491-1.135S2 17.403 2 13.75s0-5.48 1.114-6.615S6.02 6 9.605 6h3.803c3.585 0 5.378 0 6.492 1.135c.857.873 1.054 2.156 1.1 4.365V13"></svg:path><svg:path d="M19 18.5h-3m0 3a3 3 0 1 1 0-6m3 6a3 3 0 1 0 0-6M16 6l-.1-.31c-.495-1.54-.742-2.31-1.331-2.75c-.59-.44-1.372-.44-2.938-.44h-.263c-1.565 0-2.348 0-2.937.44c-.59.44-.837 1.21-1.332 2.75L7 6"></svg:path></svg:g>`,
})
export class HugeiconsJobLinkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
