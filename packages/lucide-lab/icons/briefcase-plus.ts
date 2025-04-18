import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabBriefcasePlusIcon],svg[lucide-lab-briefcase-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></svg:path><svg:rect width="20" height="14" x="2" y="7" rx="2"></svg:rect><svg:path d="M15 14H9m3-3v6"></svg:path></svg:g>`,
})
export class LucideLabBriefcasePlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
