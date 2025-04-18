import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabTargetArrowIcon],svg[lucide-lab-target-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M19 2v3h3m-8.6 5.6L22 2"></svg:path><svg:circle cx="12" cy="12" r="2"></svg:circle><svg:path d="M12.3 6H12a6 6 0 1 0 6 6v-.3"></svg:path><svg:path d="M15 2.5A9.93 9.93 0 1 0 21.5 9M5.3 19.4L4 22m14.7-2.6L20 22"></svg:path></svg:g>`,
})
export class LucideLabTargetArrowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
