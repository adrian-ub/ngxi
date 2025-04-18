import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideAlignVerticalSpaceAroundIcon],svg[lucide-align-vertical-space-around-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:rect width="10" height="6" x="7" y="9" rx="2"></svg:rect><svg:path d="M22 20H2M22 4H2"></svg:path></svg:g>`,
})
export class LucideAlignVerticalSpaceAroundIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
