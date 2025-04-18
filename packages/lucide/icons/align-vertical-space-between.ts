import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideAlignVerticalSpaceBetweenIcon],svg[lucide-align-vertical-space-between-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:rect width="14" height="6" x="5" y="15" rx="2"></svg:rect><svg:rect width="10" height="6" x="7" y="3" rx="2"></svg:rect><svg:path d="M2 21h20M2 3h20"></svg:path></svg:g>`,
})
export class LucideAlignVerticalSpaceBetweenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
