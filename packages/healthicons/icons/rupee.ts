import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsRupeeIcon],svg[healthicons-rupee-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16 12a2 2 0 0 1 2-2h12a2 2 0 1 1 0 4h-3.07a8 8 0 0 1 .818 2H30a2 2 0 1 1 0 4h-2.252a8.01 8.01 0 0 1-6.121 5.834l6.037 9.057a2 2 0 1 1-3.328 2.218l-8-12A2 2 0 0 1 18 22h2c1.48 0 2.773-.804 3.465-2H18a2 2 0 1 1 0-4h5.465A4 4 0 0 0 20 14h-2a2 2 0 0 1-2-2" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsRupeeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
