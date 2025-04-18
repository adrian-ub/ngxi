import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMailOpen01Icon],svg[hugeicons-mail-open-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m2 19l6.913-4.71c2.526-1.72 3.648-1.72 6.174 0L22 19"></svg:path><svg:path d="M2.016 14.551c.066 3.033.099 4.55 1.23 5.673s2.706 1.162 5.855 1.24c1.938.048 3.86.048 5.798 0c3.15-.078 4.724-.117 5.855-1.24s1.164-2.64 1.23-5.673a68 68 0 0 0-.05-4.459c-.042-.932-.062-1.399-.299-1.812c-.236-.414-.644-.68-1.459-1.214l-3.76-2.463C14.273 3.2 13.203 2.5 12 2.5s-2.274.701-4.415 2.103L3.824 7.066c-.815.533-1.223.8-1.46 1.214s-.256.88-.297 1.812a68 68 0 0 0-.051 4.459"></svg:path><svg:path d="m22 9.5l-4.265 3.107C16.7 13.361 15.85 14 14.5 14M2 9.5l4.265 3.107C7.3 13.361 8.15 14 9.5 14"></svg:path></svg:g>`,
})
export class HugeiconsMailOpen01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
