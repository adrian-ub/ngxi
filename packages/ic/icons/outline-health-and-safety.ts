import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icOutlineHealthAndSafetyIcon],svg[ic-outline-health-and-safety-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.5 13H8v-3h2.5V7.5h3V10H16v3h-2.5v2.5h-3zM12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91c4.59-1.15 8-5.86 8-10.91V5zm6 9.09c0 4-2.55 7.7-6 8.83c-3.45-1.13-6-4.82-6-8.83v-4.7l6-2.25l6 2.25z"></svg:path>`,
})
export class IcOutlineHealthAndSafetyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
