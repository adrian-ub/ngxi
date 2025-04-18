import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabWhisksIcon],svg[lucide-lab-whisks-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 2v20m0-12s-4 5.8-4 8s1.8 4 4 4s4-1.8 4-4s-4-8-4-8m12-8v20m0-12s-4 5.8-4 8s1.8 4 4 4s4-1.8 4-4s-4-8-4-8"></svg:path>`,
})
export class LucideLabWhisksIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
