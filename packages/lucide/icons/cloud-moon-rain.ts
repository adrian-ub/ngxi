import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideCloudMoonRainIcon],svg[lucide-cloud-moon-rain-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.188 8.5A6 6 0 0 1 16 4a1 1 0 0 0 6 6a6 6 0 0 1-3 5.197M11 20v2m-8-2a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24M7 19v2"></svg:path>`,
})
export class LucideCloudMoonRainIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
