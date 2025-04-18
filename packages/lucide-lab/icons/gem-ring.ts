import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabGemRingIcon],svg[lucide-lab-gem-ring-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M13.2 8.1L16 4.4L14.4 2H9.6L8 4.4l2.8 3.7"></svg:path><svg:circle cx="12" cy="15" r="7"></svg:circle></svg:g>`,
})
export class LucideLabGemRingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
