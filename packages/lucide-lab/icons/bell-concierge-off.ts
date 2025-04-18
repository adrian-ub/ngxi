import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabBellConciergeOffIcon],svg[lucide-lab-bell-concierge-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m2 2l20 20M12 4v2.3M10 4h4m5.8 10.1a8 8 0 0 0-5.9-5.9m-5.2.5C5.9 10 4 12.8 4 16"></svg:path><svg:path d="M16 16H4a2 2 0 0 0-2 2v2h18"></svg:path></svg:g>`,
})
export class LucideLabBellConciergeOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
