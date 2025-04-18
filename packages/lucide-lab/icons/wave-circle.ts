import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabWaveCircleIcon],svg[lucide-lab-wave-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:path d="M16.5 20.93a5 5 0 1 1-.6-9a7 7 0 0 0-13.9.6"></svg:path></svg:g>`,
})
export class LucideLabWaveCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
