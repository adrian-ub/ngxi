import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideGemIcon],svg[lucide-gem-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M6 3h12l4 6l-10 13L2 9Z"></svg:path><svg:path d="M11 3L8 9l4 13l4-13l-3-6M2 9h20"></svg:path></svg:g>`,
})
export class LucideGemIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
