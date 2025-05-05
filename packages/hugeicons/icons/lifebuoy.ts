import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsLifebuoyIcon],svg[hugeicons-lifebuoy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0"></svg:path><svg:path d="M17 12a5 5 0 1 1-10 0a5 5 0 0 1 10 0m-5-5V3m0 14v4m5-9h4M7 12H3m11.897-8.524a4 4 0 1 1 5.627 5.627m0 5.794a4 4 0 1 1-5.627 5.627m-5.793 0a4 4 0 1 1-5.627-5.627m0-5.793a4 4 0 1 1 5.627-5.627"></svg:path></svg:g>`,
})
export class HugeiconsLifebuoyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
