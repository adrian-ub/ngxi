import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideCircleSmallIcon],svg[lucide-circle-small-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12" cy="12" r="6" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></svg:circle>`,
})
export class LucideCircleSmallIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
