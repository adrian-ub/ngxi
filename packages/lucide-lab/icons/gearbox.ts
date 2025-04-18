import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabGearboxIcon],svg[lucide-lab-gearbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 4v16m7-16v16m7-16v8H5"></svg:path>`,
})
export class LucideLabGearboxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
