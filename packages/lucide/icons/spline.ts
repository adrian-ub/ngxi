import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideSplineIcon],svg[lucide-spline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="19" cy="5" r="2"></svg:circle><svg:circle cx="5" cy="19" r="2"></svg:circle><svg:path d="M5 17A12 12 0 0 1 17 5"></svg:path></svg:g>`,
})
export class LucideSplineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
