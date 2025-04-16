import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideRadarIcon],svg[lucide-radar-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M19.07 4.93A10 10 0 0 0 6.99 3.34M4 6h.01M2.29 9.62a10 10 0 1 0 19.02-1.27"></svg:path><svg:path d="M16.24 7.76a6 6 0 1 0-8.01 8.91M12 18h.01m5.98-6.34a6 6 0 0 1-2.22 5.01"></svg:path><svg:circle cx="12" cy="12" r="2"></svg:circle><svg:path d="m13.41 10.59l5.66-5.66"></svg:path></svg:g>`,
})
export class LucideRadarIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
