import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabBeeHiveIcon],svg[lucide-lab-bee-hive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:rect width="10" height="4" x="7" y="2" rx="2"></svg:rect><svg:rect width="16" height="4" x="4" y="6" rx="2"></svg:rect><svg:path d="M14 14h6a2 2 0 1 0 0-4H4a2 2 0 1 0 0 4h6"></svg:path><svg:rect width="4" height="8" x="10" y="10" rx="2"></svg:rect><svg:path d="M19 14a2 2 0 1 1 0 4H5a2 2 0 1 1 0-4"></svg:path><svg:rect width="14" height="4" x="5" y="18" rx="2"></svg:rect></svg:g>`,
})
export class LucideLabBeeHiveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
