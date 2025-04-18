import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabTabXIcon],svg[lucide-lab-tab-x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m14.5 9.5l-5 5m5 0l-5-5M4 20V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v14m2 0H2"></svg:path>`,
})
export class LucideLabTabXIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
