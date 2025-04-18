import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideHistoryIcon],svg[lucide-history-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 12a9 9 0 1 0 9-9a9.75 9.75 0 0 0-6.74 2.74L3 8"></svg:path><svg:path d="M3 3v5h5m4-1v5l4 2"></svg:path></svg:g>`,
})
export class LucideHistoryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
