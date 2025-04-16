import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideMapPinCheckInsideIcon],svg[lucide-map-pin-check-inside-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></svg:path><svg:path d="m9 10l2 2l4-4"></svg:path></svg:g>`,
})
export class LucideMapPinCheckInsideIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
