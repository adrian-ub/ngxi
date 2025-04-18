import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabBedBunkIcon],svg[lucide-lab-bed-bunk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 22V2m0 3h18a2 2 0 0 1 2 2v15M6 5v5m-4 0h20M2 14h20m0 5H2m4-5v5"></svg:path>`,
})
export class LucideLabBedBunkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
