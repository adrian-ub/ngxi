import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabPineappleRingIcon],svg[lucide-lab-pineapple-ring-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:ellipse cx="12" cy="10" rx="10" ry="8"></svg:ellipse><svg:ellipse cx="12" cy="10" rx="3" ry="2"></svg:ellipse><svg:path d="m6 4l1.5 1.5m9.2-2.1L15.5 5M2 10v4c0 4.4 4.5 8 10 8s10-3.6 10-8v-4h-3"></svg:path><svg:path d="m8 15l-1 2v3.9m5-4.9v6"></svg:path></svg:g>`,
})
export class LucideLabPineappleRingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
