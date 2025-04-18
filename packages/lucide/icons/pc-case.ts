import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucidePcCaseIcon],svg[lucide-pc-case-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:rect width="14" height="20" x="5" y="2" rx="2"></svg:rect><svg:path d="M15 14h.01M9 6h6m-6 4h6"></svg:path></svg:g>`,
})
export class LucidePcCaseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
